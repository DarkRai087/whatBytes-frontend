# E-commerce Store - Frontend Assignment

A modern e-commerce web application built with Next.js 14, TypeScript, and Tailwind CSS. This project implements a complete product listing, filtering, and cart management system.

## 🚀 Live Demo

**Deployed URL:** [Your Vercel Deployment URL Here]

## 📋 Features

### ✅ Implemented Features

- **Home Page (/)** - Product Listing
  - Responsive header with logo, search bar, and cart icon
  - Sidebar with category filters and price range slider
  - Responsive product grid (3 columns desktop, 2 tablet, 1 mobile)
  - Product cards with image, title, price, rating, and "Add to Cart" button

- **Product Detail Page (/product/[id])**
  - Large product image display
  - Product information (title, price, description, category)
  - Quantity selector with increment/decrement buttons
  - Add to Cart functionality
  - Star rating display

- **Cart Page (/cart)**
  - List of added products with images and details
  - Quantity update controls (increase/decrease/remove)
  - Price summary with subtotal and total
  - Clear cart functionality

### 🔧 Implemented Logic

- **Filtering System**
  - Category filtering (All, Electronics, Clothing, Home)
  - Price range filtering with slider
  - Search functionality with string matching
  - URL-based filters support (e.g., `?category=electronics&price=0-1000`)

- **State Management**
  - Client-side cart state using Zustand
  - Persistent cart storage in localStorage
  - Real-time cart updates and item count display

- **Routing & Navigation**
  - Dynamic routing with Next.js App Router
  - Product detail pages with dynamic IDs
  - Conditional rendering for empty states

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand with persist middleware
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── cart/
│   │   └── page.tsx          # Cart page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx      # Product detail page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Header.tsx            # Header with search and cart
│   ├── Sidebar.tsx           # Filters sidebar
│   ├── ProductCard.tsx       # Product card component
│   └── Footer.tsx            # Footer component
├── data/
│   └── products.ts           # Sample product data
├── lib/
│   └── store.ts              # Zustand store configuration
└── types/
    └── index.ts              # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile:** < 768px (1 column grid)
- **Tablet:** 768px - 1024px (2 column grid)
- **Desktop:** > 1024px (3 column grid)

## 🔍 Key Features Explained

### Search & Filtering
- **Search Bar:** Real-time search across product titles and descriptions
- **Category Filter:** Radio buttons for different product categories
- **Price Filter:** Range slider for price filtering
- **URL State:** Filters are reflected in URL parameters for bookmarking

### Cart Management
- **Add to Cart:** Products can be added from listing or detail pages
- **Quantity Control:** Increase/decrease quantities or remove items
- **Persistent Storage:** Cart state persists across browser sessions
- **Real-time Updates:** Cart icon shows current item count

### Product Display
- **Responsive Grid:** Adapts to different screen sizes
- **Product Cards:** Clean design with essential information
- **Detail Pages:** Comprehensive product information
- **Image Placeholders:** Ready for actual product images

## 🎨 UI/UX Features

- **Loading States:** Smooth transitions and interactions
- **Empty States:** Helpful messages when no products found
- **Hover Effects:** Interactive elements with visual feedback
- **Consistent Design:** Cohesive color scheme and typography
- **Accessibility:** Semantic HTML and proper contrast ratios

## 📊 Sample Data

The application includes 8 sample products across different categories:
- Electronics: Smartphones, headphones, cameras, smartwatches
- Clothing: T-shirts, backpacks, sunglasses
- Home: (Ready for expansion)

## 🚢 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Deploy with default settings

3. **Update README**
   - Add your live deployment URL to this README

### Environment Variables

No environment variables required for basic functionality. The app uses:
- Client-side state management
- Local storage for persistence
- Static product data

## 🔧 Customization

### Adding New Products
Edit `src/data/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  title: 'Product Name',
  price: 99,
  description: 'Product description',
  category: 'Electronics',
  image: '/path/to/image',
  rating: 4.5
}
```

### Styling Modifications
- All styles use Tailwind CSS classes
- Custom styles can be added to `globals.css`
- Component-specific styles are inline with Tailwind

### Adding New Categories
1. Update the categories array in `Sidebar.tsx`
2. Add products with the new category in `products.ts`

## 🏗️ Development Process

This project was built with incremental commits:

1. **Initial Setup** - Next.js project with TypeScript and Tailwind
2. **Header Component** - Logo, search bar, and cart icon
3. **Product Listing** - Grid layout and product cards
4. **Sidebar Filters** - Category and price filtering
5. **Product Detail** - Individual product pages
6. **Cart Functionality** - Add, remove, and manage cart items
7. **Search Feature** - Real-time product search
8. **URL Filters** - URL parameter-based filtering
9. **Responsive Design** - Mobile and tablet optimizations
10. **Final Polish** - Loading states, empty states, and UX improvements

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
