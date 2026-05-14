const TASKS = [
    // PHASE 1: NOW - URGENT (May 15 - May 31)
    { id: 1, title: "Hire DJ", phase: 1, category: "vendors", owner: "You", status: "Not Started", due: "2026-05-31", budget: 1500, spent: 0, vendor: "", phone: "", email: "", notes: "Must have South Asian experience, Bollywood songs" },
    { id: 2, title: "Hire Mehendi Artist", phase: 1, category: "vendors", owner: "You", status: "Not Started", due: "2026-05-31", budget: 800, spent: 0, vendor: "", phone: "", email: "", notes: "Include music/dance coordination, henna artist" },
    { id: 3, title: "Hire Decorator", phase: 1, category: "vendors", owner: "Fiancé", status: "Not Started", due: "2026-05-28", budget: 2500, spent: 0, vendor: "", phone: "", email: "", notes: "Traditional + modern mix, experience with South Asian weddings" },
    { id: 4, title: "Finalize Catering Menu", phase: 1, category: "vendors", owner: "You", status: "Not Started", due: "2026-05-31", budget: 5000, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Vegetarian options, dietary restrictions, bar setup, cocktail hour" },
    { id: 5, title: "Hire Photographer", phase: 1, category: "vendors", owner: "Fiancé", status: "Not Started", due: "2026-05-31", budget: 2000, spent: 0, vendor: "", phone: "", email: "", notes: "Mehendi + main wedding coverage, candid shots, traditional portraits" },
    { id: 6, title: "Hire Videographer", phase: 1, category: "vendors", owner: "You", status: "Not Started", due: "2026-05-31", budget: 1500, spent: 0, vendor: "", phone: "", email: "", notes: "Highlight reel + full edit, timely delivery" },
    { id: 7, title: "Finalize Guest List", phase: 1, category: "invitations", owner: "Both", status: "Not Started", due: "2026-05-25", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Confirm plus-ones, final headcount for catering" },
    { id: 8, title: "Design Formal Invite", phase: 1, category: "invitations", owner: "You", status: "Not Started", due: "2026-05-22", budget: 300, spent: 0, vendor: "", phone: "", email: "", notes: "Include mehendi date, puja timing, wedding day details, RSVP instructions" },
    { id: 9, title: "Order Invite Printing", phase: 1, category: "invitations", owner: "Fiancé", status: "Not Started", due: "2026-05-25", budget: 200, spent: 0, vendor: "", phone: "", email: "", notes: "150+ copies, include RSVP cards, envelopes, return address" },
    { id: 10, title: "Design Dress Code Card", phase: 1, category: "invitations", owner: "You", status: "Not Started", due: "2026-05-25", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Traditional attire guidance for mehendi and wedding" },
    { id: 11, title: "Set Overall Budget", phase: 1, category: "budget", owner: "Both", status: "Not Started", due: "2026-05-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Establish spending limits per category, track throughout planning" },
    { id: 12, title: "Book Room Block", phase: 1, category: "budget", owner: "You", status: "Not Started", due: "2026-05-31", budget: 0, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Reserve 20+ rooms at group rate, confirm block size and cut-off date" },
    { id: 13, title: "Create Budget Tracker", phase: 1, category: "budget", owner: "You", status: "Not Started", due: "2026-05-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Spreadsheet or shared doc for real-time tracking" },
    { id: 14, title: "Plan Puja Details", phase: 1, category: "ceremony", owner: "Family", status: "Not Started", due: "2026-05-31", budget: 300, spent: 0, vendor: "", phone: "", email: "", notes: "Priest/pandit contact, supplies list, timing, attendees" },
    { id: 15, title: "Arrange Puja Location", phase: 1, category: "ceremony", owner: "Family", status: "Not Started", due: "2026-05-31", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Day before wedding, hotel suite or family home?" },
    { id: 16, title: "Plan Mehendi Day Setup", phase: 1, category: "ceremony", owner: "You", status: "Not Started", due: "2026-05-31", budget: 1500, spent: 0, vendor: "", phone: "", email: "", notes: "Confirm date/time, venue logistics, guest list finalization" },

    // PHASE 2: MID-STAGE (June 1 - July 15)
    { id: 17, title: "Finalize Color Scheme", phase: 2, category: "decor", owner: "You", status: "Not Started", due: "2026-06-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Mehendi colors + wedding colors, coordinate with decorator" },
    { id: 18, title: "Design Mehendi Decor", phase: 2, category: "decor", owner: "Fiancé", status: "Not Started", due: "2026-06-15", budget: 1500, spent: 0, vendor: "", phone: "", email: "", notes: "Floral, fabric, lighting, entrance, seating areas" },
    { id: 19, title: "Design Main Venue Decor", phase: 2, category: "decor", owner: "You", status: "Not Started", due: "2026-06-20", budget: 2000, spent: 0, vendor: "", phone: "", email: "", notes: "Mandap, entrance, centerpieces, lighting, stage" },
    { id: 20, title: "Plan Table Layouts", phase: 2, category: "decor", owner: "Fiancé", status: "Not Started", due: "2026-06-25", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Seating assignments, table numbers, place cards" },
    { id: 21, title: "Cake Design Consultation", phase: 2, category: "food", owner: "You", status: "Not Started", due: "2026-06-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Flavors, design options, traditional elements, size requirements" },
    { id: 22, title: "Cake Tasting", phase: 2, category: "food", owner: "Both", status: "Not Started", due: "2026-06-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Schedule appointment, sample multiple flavors" },
    { id: 23, title: "Finalize Cake Order", phase: 2, category: "food", owner: "Fiancé", status: "Not Started", due: "2026-07-01", budget: 600, spent: 0, vendor: "", phone: "", email: "", notes: "Confirm size, flavors, design, delivery time, setup assistance" },
    { id: 24, title: "Menu Tasting (Catering)", phase: 2, category: "food", owner: "You", status: "Not Started", due: "2026-06-15", budget: 0, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Final menu approval, dietary accommodations, timing" },
    { id: 25, title: "Confirm Photo Timeline", phase: 2, category: "media", owner: "Fiancé", status: "Not Started", due: "2026-06-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Get-ready shots, ceremony, reception, must-have shots list" },
    { id: 26, title: "Confirm Video Scope", phase: 2, category: "media", owner: "You", status: "Not Started", due: "2026-06-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Highlight reel length, full edit, delivery timeline, drone footage" },
    { id: 27, title: "Create Shot List", phase: 2, category: "media", owner: "Both", status: "Not Started", due: "2026-06-30", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Document key moments, special shots, family photos, candid moments" },
    { id: 28, title: "Mail Formal Invites", phase: 2, category: "invitations", owner: "You", status: "Not Started", due: "2026-06-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Mail 150+ invites, include RSVP deadline (July 1)" },
    { id: 29, title: "Set RSVP Deadline", phase: 2, category: "invitations", owner: "Both", status: "Not Started", due: "2026-06-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Suggest July 1 deadline for final catering count" },
    { id: 30, title: "Track RSVPs", phase: 2, category: "invitations", owner: "Fiancé", status: "Not Started", due: "2026-07-05", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Create tracking spreadsheet, send reminders for non-responses" },
    { id: 31, title: "Confirm DJ Details", phase: 2, category: "vendors", owner: "You", status: "Not Started", due: "2026-06-15", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Song requests, timing, equipment, sound check, lighting" },
    { id: 32, title: "Confirm Decorator Timeline", phase: 2, category: "vendors", owner: "Fiancé", status: "Not Started", due: "2026-06-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Setup schedule, day-before prep, breakdown timeline" },
    { id: 33, title: "Confirm Photo/Video Details", phase: 2, category: "vendors", owner: "You", status: "Not Started", due: "2026-06-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Final timeline, deliverables, payment schedule, final headcount" },

    // PHASE 3: FINAL PREP (July 16 - August 20)
    { id: 34, title: "Bride Shopping (Mehendi)", phase: 3, category: "attire", owner: "You", status: "Not Started", due: "2026-07-31", budget: 800, spent: 0, vendor: "", phone: "", email: "", notes: "Traditional attire, jewelry, henna planning, shoes" },
    { id: 35, title: "Bride Shopping (Wedding)", phase: 3, category: "attire", owner: "You", status: "Not Started", due: "2026-07-31", budget: 1500, spent: 0, vendor: "", phone: "", email: "", notes: "Lehenga/sari, jewelry, accessories, undergarments, shoes" },
    { id: 36, title: "Groom Shopping (Wedding)", phase: 3, category: "attire", owner: "Fiancé", status: "Not Started", due: "2026-07-31", budget: 600, spent: 0, vendor: "", phone: "", email: "", notes: "Sherwani/kurta, accessories, shoes, tailoring" },
    { id: 37, title: "Bride Hair & Makeup Trial", phase: 3, category: "attire", owner: "You", status: "Not Started", due: "2026-08-05", budget: 200, spent: 0, vendor: "", phone: "", email: "", notes: "Trial run, photos for reference, confirm final look" },
    { id: 38, title: "Groom Grooming Prep", phase: 3, category: "attire", owner: "Fiancé", status: "Not Started", due: "2026-08-15", budget: 150, spent: 0, vendor: "", phone: "", email: "", notes: "Hair cut/trim, spa, facial, grooming services" },
    { id: 39, title: "Finalize Headcount", phase: 3, category: "budget", owner: "You", status: "Not Started", due: "2026-07-15", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Final guest count, confirm with catering immediately" },
    { id: 40, title: "Final Catering Confirmation", phase: 3, category: "budget", owner: "Fiancé", status: "Not Started", due: "2026-07-20", budget: 0, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Final menu, bar quantities, setup timeline, payment due date" },
    { id: 41, title: "Room Block Confirmation", phase: 3, category: "budget", owner: "You", status: "Not Started", due: "2026-07-20", budget: 0, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Verify room reservations, confirm group rate applied" },
    { id: 42, title: "Finalize Return Gift Purchases", phase: 3, category: "budget", owner: "Family", status: "Not Started", due: "2026-08-01", budget: 500, spent: 0, vendor: "", phone: "", email: "", notes: "Order or purchase return gifts, arrive before August 15" },
    { id: 43, title: "Arrange Return Gift Wrapping", phase: 3, category: "budget", owner: "Family", status: "Not Started", due: "2026-08-10", budget: 100, spent: 0, vendor: "", phone: "", email: "", notes: "Labor/supplies for wrapping, organize for easy distribution" },
    { id: 44, title: "Distribute Dress Code Cards", phase: 3, category: "invitations", owner: "You", status: "Not Started", due: "2026-07-20", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Send via email/mail with invitations or separately" },
    { id: 45, title: "Approve Final Decor Design", phase: 3, category: "decor", owner: "Both", status: "Not Started", due: "2026-08-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Sign-off on all plans, final color/design confirmations" },
    { id: 46, title: "Finalize Seating Chart", phase: 3, category: "decor", owner: "Fiancé", status: "Not Started", due: "2026-08-05", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Print for entrance, create escort cards, table assignments final" },
    { id: 47, title: "Approve Final Cake Design", phase: 3, category: "food", owner: "You", status: "Not Started", due: "2026-08-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Confirm flavor, design, size, delivery logistics" },
    { id: 48, title: "Create Day-of Timeline", phase: 3, category: "personal", owner: "Both", status: "Not Started", due: "2026-08-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Minute-by-minute schedule, share with all vendors" },
    { id: 49, title: "Create Vendor Contact List", phase: 3, category: "personal", owner: "You", status: "Not Started", due: "2026-08-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "All phone numbers, emails, emergency contacts in one place" },
    { id: 50, title: "Assign Wedding Day Roles", phase: 3, category: "personal", owner: "Both", status: "Not Started", due: "2026-08-10", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Designate coordinator, helpers, family roles, responsibilities" },

    // PHASE 4: WEEK BEFORE (August 25 - September 3)
    { id: 51, title: "Final Puja Prep (Day Before)", phase: 4, category: "ceremony", owner: "Family", status: "Not Started", due: "2026-08-31", budget: 200, spent: 0, vendor: "", phone: "", email: "", notes: "Supplies list, priest confirmation, timing, all attendees confirmed" },
    { id: 52, title: "Mehendi Day Finalization", phase: 4, category: "ceremony", owner: "You", status: "Not Started", due: "2026-08-25", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Last-minute confirmations with all vendors" },
    { id: 53, title: "Confirm All Vendor Arrivals", phase: 4, category: "vendors", owner: "Fiancé", status: "Not Started", due: "2026-09-02", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Timing confirmations, setup coordination, arrival addresses" },
    { id: 54, title: "Collect All Vendor Deliverables", phase: 4, category: "vendors", owner: "You", status: "Not Started", due: "2026-09-03", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Memory cards, USB drives from photographer/videographer" },
    { id: 55, title: "Confirm Cake Delivery", phase: 4, category: "food", owner: "You", status: "Not Started", due: "2026-09-02", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Delivery time, setup assistance, cutting knife, server" },
    { id: 56, title: "Confirm Room Setup", phase: 4, category: "budget", owner: "Fiancé", status: "Not Started", due: "2026-09-01", budget: 0, spent: 0, vendor: "Royal Sonesta", phone: "", email: "", notes: "Verify all room setup details, layout confirmations" },
    { id: 57, title: "Coordinate Decor Delivery", phase: 4, category: "decor", owner: "You", status: "Not Started", due: "2026-09-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Setup timing, delivery instructions, contact on day-of" },
    { id: 58, title: "Return Gift Distribution", phase: 4, category: "budget", owner: "Family", status: "Not Started", due: "2026-09-04", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Assign person to hand out gifts, organize by table/family" },
    { id: 59, title: "Final Fitting (Bride)", phase: 4, category: "attire", owner: "You", status: "Not Started", due: "2026-08-30", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Last-minute adjustments, hemming, alterations" },
    { id: 60, title: "Final Fitting (Groom)", phase: 4, category: "attire", owner: "Fiancé", status: "Not Started", due: "2026-08-30", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Last-minute adjustments, hemming, alterations" },
    { id: 61, title: "Bride Hair & Makeup Day-of", phase: 4, category: "attire", owner: "You", status: "Not Started", due: "2026-09-04", budget: 200, spent: 0, vendor: "", phone: "", email: "", notes: "Confirm time, location, bring reference photos" },
    { id: 62, title: "Prepare Hair & Makeup Setup", phase: 4, category: "personal", owner: "Family", status: "Not Started", due: "2026-09-03", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Hotel room setup, supplies ready, timing coordination" },
    { id: 63, title: "Final Vendor Walkthrough", phase: 4, category: "vendors", owner: "Fiancé", status: "Not Started", due: "2026-09-03", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Timing, entrance/exit, logistics with each vendor" },
    { id: 64, title: "Honeymoon Confirmation", phase: 4, category: "personal", owner: "You", status: "Not Started", due: "2026-09-01", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Flights, hotel, confirmations, itinerary finalized" },
    { id: 65, title: "Designate Day-of Coordinator", phase: 4, category: "personal", owner: "Both", status: "Not Started", due: "2026-08-25", budget: 0, spent: 0, vendor: "", phone: "", email: "", notes: "Point person for vendor issues, timeline manager, problem-solver" }
];

const PHASES = [
    { id: 1, name: "NOW - URGENT", emoji: "⚡", dates: "May 15 - May 31", purpose: "Critical vendor bookings and foundational decisions" },
    { id: 2, name: "MID-STAGE", emoji: "🔄", dates: "June 1 - July 15", purpose: "Confirmations, design finalization, invitations sent" },
    { id: 3, name: "FINAL PREP", emoji: "📋", dates: "July 16 - August 20", purpose: "RSVPs, final confirmations, purchases" },
    { id: 4, name: "WEEK BEFORE", emoji: "🎉", dates: "August 25 - September 3", purpose: "Day-of logistics, final preparations, puja setup" }
];

const CATEGORIES = {
    vendors: { label: "Vendors", emoji: "🏢" },
    invitations: { label: "Invitations", emoji: "📝" },
    budget: { label: "Budget & Logistics", emoji: "💰" },
    ceremony: { label: "Ceremony & Puja", emoji: "🪔" },
    decor: { label: "Decor & Design", emoji: "🎨" },
    media: { label: "Media", emoji: "📸" },
    food: { label: "Food & Cake", emoji: "🍰" },
    attire: { label: "Attire & Beauty", emoji: "👗" },
    entertainment: { label: "Entertainment", emoji: "🎵" },
    personal: { label: "Personal & Other", emoji: "👥" }
};
