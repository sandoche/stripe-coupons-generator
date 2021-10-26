require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SK);

const main = async () => {
  try {
    const coupon = await stripe.coupons.create({
      percent_off: 26.76,
      id: process.env.COUPON_ID,
      currency: "USD"
    });
  } catch (e) {}

  for (let index = 0; index <= 100; index++) {
    const promotionCode = await stripe.promotionCodes.create({
      coupon: process.env.COUPON_ID,
      max_redemptions: 1
    })
  
    console.log(promotionCode.code)
  }
}

main()