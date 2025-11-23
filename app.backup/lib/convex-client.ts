import { ConvexReactClient } from "convex";

const convexUrl = import.meta.env.VITE_CONVEX_URL || "http://localhost:3210";

export const convex = new ConvexReactClient(convexUrl);
