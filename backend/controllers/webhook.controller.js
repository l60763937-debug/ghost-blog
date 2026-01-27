import { Webhook } from "svix";
import User from "../models/user.model.js";

export const createUser = async (req,res)=> {
    const secret = process.env.WEBHOOK_SECRET;
    
    if (!secret) throw new Error("Webhook secret needed!");
    
    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(secret);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            success: false,
            message: 'Webhook verification is failed'
        });
    }

    if (evt.type === "user.created") {
      console.log("New user created:", evt.data.id);
      const newUser = new User({
        clerkUserId: evt.data.id,
        username: evt.data.username || evt.data.email_addresses[0]?.email_address,
        email: evt.data.email_addresses[0]?.email_address,
        avatar: evt.data.image_url || evt.data.profile_image_url
      })
      await newUser.save();
    }
    return res.status(200).json({
        message: "Webhook received",
    });
}