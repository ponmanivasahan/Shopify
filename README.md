## THE VENDORA <img src="img/vending-machine.png" alt="">

During a stretch of exam season, in the middle of the revision breaks and late-night study sessions, I found myself wanting to build this to complete my lockin sidequest challenge, which is something simple, fun, and complete from end to end. I used to go to vending machine to refresh to buy snacks, That's how The Vendora idea came to my mind.

It started as a small idea, What if a vending machine existed in the browser ?
Not just visually, but functionally. Pick items, manage quantities, see stock reduce, pay, and finish the flow just like you do in real life.

### The Experience

The vending Spot isn't just a static UI, it behaves like a real machine:

1. A grid of 12 products, neatly organized into chocolates, chips, and drinks
2. Add items to your cart with intuitive + / − controls
3. Real-time stock updates as selections are made
4. A dynamic cart that reflects your choices with a clear price breakdown
5. A discount system — try DISCOUNT30 and see it apply instantly
6. Two payment flows:
	1. Cash simulation
	2. GPay via QR code
7. A smooth loading state followed by a confirmation screen
8. A simple star rating system to capture user feedback
9. A floating cart button that appears naturally as you scroll
10. Automatic reset after checkout, just like a real vending machine ready for the next user

### Discount Codes

| Code       | Benefit          |
| ---------- | ---------------- |
| DISCOUNT30 | 30% off          |
| discount30 | Case-insensitive |

### Reflections & Improvements

Like most side projects, this one evolved quickly — and there’s plenty of room to make it better:

1. Product data is currently hardcoded — moving it to a JSON structure would improve scalability
2. Quantity handlers (plus1, minus1, etc.) are repetitive and could be refactored into reusable logic
3. Payments are simulated — integrating a real payment gateway would make it production-ready
4. Mobile responsiveness can be improved, especially for smaller screens
5. Ratings are temporary and reset on reload — persistent storage would enhance the experience

### Tech Stack

1. HTML
2. CSS
3. JavaScript (Vanilla)
4. Font Awesome (icons)
5. Google Fonts

No frameworks. No libraries beyond the basics. Just fundamentals.

### Closing Note

This project was built in between study sessions — not as an assignment, but as a way to keep building consistently, even during a busy period.

It’s not perfect, and it wasn’t meant to be.
But it works, it feels real, and it reflects progress — which is what matters most.