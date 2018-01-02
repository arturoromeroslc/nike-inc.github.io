'use strict';
const m = require('mithril');

const footer = {
  view() {
    return m("footer.bg-black.mt6-sm",
      m(".ncss-container.fixed-fluid.pt10-sm.prl8-md.prl12-lg", [
        m(".footer.ncss-row", [
          m(".ncss-col-sm-12.ncss-col-md-9.prl6-sm.prl2-md.u-va-t.u-no-ws", [
            m(".u-md-ib.u-va-t.pr7-md.pb6-sm.pb0-md.mr5-md", [
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://store.nike.com/us/en_us/?l=shop%2Cgift_cards'
                },
                "GIFT CARDS"
              ),
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://www.nike.com/us/en_us/retail/'
                },
                "FIND A STORE"
              ),
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://store.nike.com/us/en_us/?l=shop%2Cemail_signup'
                },
                "SIGN UP FOR EMAIL"
              ),
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://www.nike.com/us/en_us/s/register'
                },
                "JOIN NIKE+"
              )
            ]),
            m(".u-md-ib.u-va-t.pr7-md.pb6-sm.pb0-md.mr5-md", [
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://help-en-us.nike.com/'
                },
                "GET HELP"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://store.nike.com/us/en_us/orders'
                },
                "Order Status"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://help-en-us.nike.com/app/answers/detail/article/shipping-delivery'
                },
                "Shipping and Delivery"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://help-en-us.nike.com/app/landing/returns'
                },
                "Returns"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://help-en-us.nike.com/app/answers/detail/article/payment-options'
                },
                "Payment Options"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://help-en-us.nike.com/app/landing/contact'
                },
                "Contact Us"
              )
            ]),
            m(".u-md-ib.u-va-t.pr7-md.pb6-sm.pb0-md.mr5-md", [
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://news.nike.com/'
                },
                "NEWS"
              ),
              m("a.link.ncss-brand.text-color-white.u-sm-b.mb1-sm", {
                  href: 'http://about.nike.com/'
                },
                "ABOUT NIKE"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://jobs.nike.com/'
                },
                "Careers"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://investors.nike.com/'
                },
                "Investors"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://jobs.converse.com/'
                },
                "Converse"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://www.nike.com/us/en_us/c/sustainability'
                },
                "Sustainable Innovation"
              ),
              m("a.link.small.text-color-grey.mb1-sm", {
                  href: 'http://help-en-us.nike.com/app/answers/detail/article/supply-chain'
                },
                "CA Supply Chains Act"
              )
            ])
          ]),
          m(".social.ncss-col-sm-12.ncss-col-md-3.prl6-sm.prl2-md.u-va-t", [
            m("p.ncss-brand.text-color-white.u-sm-b.mb1-sm.mb-2-sm",
              "SOCIAL"
            ),
            m("a.link.text-color-grey.g72-twitter.h3.mr1-sm", {
              href: 'https://twitter.com/Nike'
            }),
            m("a.link.text-color-grey.g72-facebook.h3.mr1-sm", {
              href: 'https://www.facebook.com/nike'
            }),
            m("a.link.text-color-grey.g72-youtube.h3.mr1-sm", {
              href: 'https://www.youtube.com/user/nike'
            }),
            m("a.link.text-color-grey.g72-instagram.h3", {
              href: 'http://instagram.com/nike'
            })
          ])
        ]),
        m(".ncss-row.border-top-grey.mt12-sm", [
          m(".ncss-col-sm-6.pt2-sm.pb2-sm.u-va-m",
            m("small.text-color-grey", [
              m.trust("&copy;"),
              ` ${(new Date()).getUTCFullYear()} Nike, Inc. All Rights Reserved`
            ])
          ),
          m(".ncss-col-sm-6.u-va-m.u-align-right", [
            m("a.link.text-color-grey.u-sm-ib.mr4-sm", {
                href: 'http://www.nike.com/us/en_us/c/help/terms-conditions'
              },
              m("small",
                "Terms of Use"
              )
            ),
            m("a.link.text-color-grey.u-sm-ib", {
                href: 'http://www.nike.com/us/en_us/c/help/privacy-policy'
              },
              m("small",
                "Nike Privacy Policy"
              )
            )
          ])
        ])
      ])
    );
  }
};

module.exports = footer;
