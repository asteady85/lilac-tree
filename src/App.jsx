import { useState } from "react"
import "./App.css"
// import homeImg from "./images/home-bg.jpg"
import ScrollingGallery from "./components/ScrollingGallery"
import H2 from "./components/H2"
import H3 from "./components/H3"
import Header from "./components/Header"
import ImageGallery from "./components/ImageGallery"
import ImageContent from "./components/ImageContent"
import ScrollToTop from "./components/ScrollToTop"
import Testimonial from "./components/Testimonial"
import Footer from "./components/Footer"
import ServicesGrid from "./components/ServicesGrid"
import ContactSection from "./components/ContactSection"

export default function App() {
  const loisImg = new URL("images/lois.png", import.meta.url).href
  const weddingImg = new URL("images/gallery/wedding-2.jpg", import.meta.url).href
  const wedding2Img = new URL("images/gallery/wedding-3.jpg", import.meta.url).href
  const namingImg = new URL("images/gallery/naming-1.jpg", import.meta.url).href
  const funeralImg = new URL("images/gallery/funeral-1.jpg", import.meta.url).href
  // const locationImg = new URL("images/high-peak.png", import.meta.url).href
  const locationImg = new URL("images/buxton.jpg", import.meta.url).href
  return (
    <>
      <Header />
      <ScrollingGallery />
      <section id="about-me" className="section">
        <ImageContent id="location" image={loisImg} reverse>
          <H2 meta="HELLO THERE!">I'm Lois.</H2>
          <p>Hello, I'm Lois – the heart behind Lilac Tree Celebrancy.</p>
          <p>I'm an independent celebrant specialising in weddings, funerals, and naming day ceremonies, creating bespoke moments that reflect the people at the centre of each occasion. My journey into celebrancy began with a deep love for words – writing poems for friends' weddings and birthdays sparked something in me, and that spark grew into a calling.</p>
          <p>With a background in English and a passion for storytelling, I craft ceremonies that are personal, meaningful and true to you. Whether it's a joyful celebration of love, a heartfelt farewell, or a warm welcome for a new life, I bring empathy, creativity and care to every event.</p>
          <p>I'm open-minded and here for all kinds of love and life stories. As a mum of two and an outdoors enthusiast, I value connection, authenticity and making the most of every moment – and I bring that same spirit to my work with you.</p>
          <p>At Lilac Tree Celebrancy, no two ceremonies are the same. I take the time to get to know you, understand your vision and go the extra mile to make your special day everything you hope for – and more.</p>
          <p>Let's create something beautiful together.</p>
        </ImageContent>
      </section>

      <Testimonial author="Tammy & Matthew">
        Lois is so warm and sincere, she created the perfect ceremony. She made everyone feel included and really made it unique. I loved every minute!
      </Testimonial>

      <section className="section-padding">
        <ImageContent id="location" image={locationImg} reverse>
          <H2 meta="Travelling to make your day special">High Peak Celebrant</H2>
          <p>I'm based in the beautiful High Peak and happily travel up to 30 miles at no extra cost.</p>
          <p>If your venue is a little further, I simply ask £1 per additional mile. Don't worry - I'll always go the distance to be part of your special day!</p>
          <p>If you have any questions about anything, feel free to <a href="#contact-me">contact me</a> and I will be more than happy to put your mind at ease.</p>
          <p>Follow me on <a href="https://www.instagram.com/loislilactree/">Instagram</a>, see what I have been up to and get a feel for who I am and what I can bring to your celebration.</p>
        </ImageContent>
      </section>

      <ServicesGrid />

      <Testimonial author="Sarah" className="padded-margin top">
        I can't recommend Lois highly enough for the crematorium service she provided. Lois was compassionate, warm, and professional throughout the entire process. A day I had been dreading turned into a truly beautiful and meaningful send-off for my dad, thanks to the care and humanity Lois showed, along with her thoughtful and thorough preparation.<br /><br />
        We are so grateful for the comfort and guidance she provided during such a difficult time.
      </Testimonial>
      
      <section>
        <ImageContent id="weddings" image={weddingImg}>
          <H2 meta="WEDDINGS">Celebrating Love</H2>
          <p>&nbsp;</p>
          <p>At Lilac Tree Celebrancy, your love story is the heart of the ceremony. Whether you're dreaming of something traditional, contemporary, quirky or deeply personal, I work with you to create a wedding ceremony that reflects who you are—your journey, your laughter, your promises. With warmth, creativity, and care, I'll help shape a celebration that's authentically you, and unforgettable for everyone who shares it. I can help guide you, should you need me, to select readings that speak to you as a couple to create a truly personalised service.</p>
          <br /><br />
          <p>Love is why we gather. Let's make it beautiful.</p>
        </ImageContent>

        <ImageContent id="namings" image={namingImg} reverse>
          <H2 meta="NAMING CEREMONIES">Welcoming Innocence</H2>
          <p>&nbsp;</p>
          <p>A naming ceremony is a joyful celebration of new life and the connections that hold us close. <br />Whether you're welcoming a baby, honouring a blended family, or celebrating a new chapter, I'll craft a ceremony full of meaning, love, and warmth. Together, we'll create a space where your child is surrounded by words of hope, family, and the promise of a bright future.</p>
          <br /><br />
          <p>Innocence is cherished. Let's honour it with heart.</p>
        </ImageContent>

        <ImageContent id="funerals" image={funeralImg}>
          <H2 meta="FUNERALS">Honouring Remembrance</H2>
          <p>&nbsp;</p>
          <p>Saying goodbye is never easy. At Lilac Tree Celebrancy, I offer compassionate, thoughtful funeral and memorial ceremonies that honour your loved one with dignity, love, and deep respect. Whether religious, spiritual, or secular, I work closely with you to share their story, celebrate their life, and bring comfort in a time of loss.</p>
          <br /><br />
          <p>Remembrance keeps us connected. Let's honour the life that was.</p>
        </ImageContent>
      </section>

      <section id="prices" className="section-padding">
        <H2 meta="PRICES">Pricing Packages</H2>
        {/*<p className="padded bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
        <div className="flex-column">
          <div className="list-item shadow">
            <div className="prices-img-wrapper">
              <img src={wedding2Img} alt="Some image alt content" />
              <div className="price-highlight">
                <span>From &pound;450</span>
              </div>
            </div>
            <div className="content">
              <H3>Weddings</H3>
              <p>Your love story deserves a ceremony that feels true to you - heartfelt, creative, and unforgettable.</p>
              <p><b>Includes:</b></p>
              <ul className="pricing-list">
                <li>Free initial consultation (phone, Zoom or in-person)</li>
                <li>Bespoke ceremony script, written just for you</li>
                <li>Unlimited edits and communication</li>
                <li>Support with vows, readings &amp; rituals</li>
                <li>Travel within 30 miles</li>
                <li>Delivery of your ceremony on the day</li>
                <li>Keepsake script</li>
              </ul>
              <p><b><i>Optional extras:</i></b></p>
              <ul className="pricing-list">
                <li>Rehearsal at venue: +£75</li>
                <li>Travel over 30 miles: 45p per mile</li>
                <li>Printed vow cards: +£20</li>
              </ul>
            </div>
          </div>
          <div className="list-item shadow">
            <div className="prices-img-wrapper">
              <img src={namingImg} alt="Some image alt content" />
              <div className="price-highlight">
                <span>From &pound;250</span>
              </div>
            </div>
            <div className="content">
              <H3>Naming Ceremonies</H3>
              <p>A joyful way to welcome a child, celebrate family, and share love with your community.</p>
              <p><b>Includes:</b></p>
              <ul className="pricing-list">
                <li>Consultation and planning session</li>
                <li>Bespoke ceremony tailored to your family</li>
                <li>Welcome rituals, promises, readings</li>
                <li>Travel within 30 miles</li>
                <li>Beautifully written keepsake script</li>
                <li>Delivery of service on the day</li>
              </ul>
              <p><b><i>Optional extras:</i></b></p>
              <ul className="pricing-list">
                <li>Personalised naming certificate: +£15</li>
                <li>Additional children: +£25 each (if creating separate elements per child)</li>
              </ul>
            </div>
          </div>
          <div className="list-item shadow">
            <div className="prices-img-wrapper">
              <img src={funeralImg} alt="Some image alt content" />
              <div className="price-highlight">
                <span>From &pound;244</span>
              </div>
            </div>
            <div className="content">
              <H3>Funerals</H3>
              <p>A gentle, respectful space to honour a life with dignity, love, and memory.</p>
              <p><b>Includes:</b></p>
              <ul className="pricing-list">
                <li>Sensitive consultation with family or loved ones</li>
                <li>Fully bespoke tribute and ceremony script</li>
                <li>Liaison with funeral directors and venues</li>
                <li>Travel within 30 miles</li>
                <li>Printed tribute copy for the family</li>
              </ul>
              <p><b><i>Optional extras:</i></b></p>
              <ul className="pricing-list">
                <li>Additional location (e.g. burial or scattering): +£45</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonial author="Tammy & Matthew">
        Lois is so warm and sincere, she created the perfect ceremony. She made everyone feel included and really made it unique. I loved every minute!
      </Testimonial>

      {/*<section id="gallery" className="section-padding">*/}
      {/*  <H2>Gallery</H2>*/}
      {/*  <ImageGallery />*/}
      {/*</section>*/}

      <section id="contact-me" className="section-padding">
        <H2 meta="GET IN TOUCH">Contact Me</H2>
        <ContactSection />
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}
