
// ---------- User roles ----------
export const USER_ROLES = Object.freeze({
    USER: "user",
    ADMIN: "admin",
});

// ---------- Success messages ----------
export const USER_MESSAGES = Object.freeze({
    CREATED: "User created successfully",
    LOGGED_IN: "User logged in successfully",
    EXISTS: "User already exists",
});

export const NOTE_MESSAGES = Object.freeze({
    CREATED: "Note created successfully",
    UPDATED: "Note updated successfully",
    DELETED: "Note deleted successfully",
});

// ---------- Status Enums ----------
export const NOTE_STATUS = Object.freeze({
    ACTIVE: "active",
    ARCHIVED: "archived",
});

// ---------- Export grouped ----------
export const CONSTANTS = {
    USER_ROLES,
    USER_MESSAGES,
    NOTE_MESSAGES,
    NOTE_STATUS,
};

/*
import { USER_MESSAGES } from "../utils/constants.js";
return res.status(201).json(new ApiResponse(201, user, USER_MESSAGES.CREATED));

*/