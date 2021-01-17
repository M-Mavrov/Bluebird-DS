import React, { useRef, useState } from "react";
import Button from "../../Components/Buttons/Button";
import ProductTable from "../../Components/ProductTable/ProductTable";
import "./AddProduct.css";
import { useEffect } from "react";
import { useDB } from "../../contexts/DBContext";
import { firestore } from "../../Firebase";

import ProductBuilder from "../../Components/ProductBuilder/ProductBuilder";

function AddProduct() {
  const [state, setstate] = useState();
  const [removedProduct, setRemovedProduct] = useState(false);
  const [product, setProduct] = useState();
  const [edit, setEdit] = useState(false);
  const { dbProducts, dbState, updateDb, deleteFromDb } = useDB();
  const inputRef = useRef();
  const tableHeader = [
    "Edit",
    "Image",
    "Item Info",
    "Profit",
    "Price",
    "Stock",
    "Alerts",
    "Action",
    "END",
  ];

  const uploadProducts = {
    product0: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product1: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product2: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product3: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product4: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product5: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product6: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product7: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product8: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product9: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product10: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product11: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product12: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product13: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
    product14: {
      img: [
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/433a5b87-4721-4ca4-9194-36f6f1cf1676?alt=media&token=ee1d8fdf-6b15-47df-bb91-f9293b517a73",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/d40a709e-28b7-4051-9ccd-a08906003199?alt=media&token=1cc915dc-17c5-47f9-8df6-3f37990c81b3",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/5c0a59d1-bf7a-410b-b89a-71303e52efc7?alt=media&token=b7ef5bd8-4306-4b28-af2a-0eee8a8c8bc5",
        "https://firebasestorage.googleapis.com/v0/b/bluebird-ds.appspot.com/o/0b0e5ffd-f7e8-4dc3-a66c-3eff248bb04c?alt=media&token=e1dceb8d-0344-4211-b5f0-39d5821503d1",
      ],
      alerts: {
        desc: {
          vero: "",
          warning: "",
        },
        title: {
          vero: "",
          warning: "",
        },
        vero: " ",
        warning: " ",
      },
      actions: "no actions needed",
      title:
        "Manitoba Harvest Hemp Seed Oil Softgels, 2,475mg of Plant Based Omegas 3,6 & 9 per serving including GLA, Fish Oil Alternative, 60ct (pack of 1)",
      price: { buyPrice: 6.99 },

      desc:
        '<ul class="a-unordered-list a-vertical a-spacing-mini"><li><span class="a-list-item">OMEGAS 3-6-9 - 2,475mg of Plant Based Omegas 3, 6, &amp; 9 per serving. Serving size is 3 softgels.</span></li><li><span class="a-list-item">INCLUDES GLA - Hemp oil is a great way to get omegas, including the EFA known as Gamma-Linolenic Acid (GLA).</span></li><li><span class="a-list-item">EASY TO USE - Hemp Oil Soft Gels don&rsquo;t have to be refrigerated and have a longer shelf life than hemp oil, plus they&rsquo;re a convenient way to take hemp oil on the go or while travelling.</span></li><li><span class="a-list-item">NO FISH BURPS - Cold pressed from hemp seed that is grown sustainably without the use of herbicides, pesticides, or preservatives. A plant based fish oil alternative.</span></li><li><span class="a-list-item">DOES NOT CONTAIN CBD</span></li></ul><h2 class="default">Product description</h2><div id="productDescription" class="a-section a-spacing-small"><div class="disclaim">Size:<strong>60 Count (Pack of 1)</strong></div><p>Hemp Oil soft gels from Manitoba Harvest deliver omegas 3, 6, and 9. These 1,000 mg soft gels are also a source of super fatty acids gamma linolenic acid (GLA) and stearidonic acid (SDA). Product of Canada.</p></div><h2>Important information</h2><div class="a-section content"><span class="a-text-bold">Safety Information</span><p>&nbsp;</p><p>Many food and beverage cans have linings containing bisphenol A (BPA), a chemical known to the State of California to cause harm to the female reproductive system. Jar lids and bottle caps may also contain BPA. You can be exposed to BPA when you consume foods or beverages packaged in these containers. For more information, go to: www.P65Warnings.ca.gov/BPAThis product is labelled to United States standards and may differ from similar products sold elsewhere in its ingredients, labeling and allergen warnings</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Ingredients</span><p>&nbsp;</p><p>0 Zinc</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Directions</span><p>&nbsp;</p><p>Follow usage directions on label.</p><p>&nbsp;</p></div><div class="a-section content"><span class="a-text-bold">Legal Disclaimer</span><p>&nbsp;</p><p>Statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</p></div>" ',
      details: {
        dimensions: " 2.4 x 2.4 x 4.3 inches; 1.76 Ounces",
        itemNumber: " 697658101052",
        upc: "767674089280 697658101052 789397280072",
        brand: "Manitoba",
      },
    },
  };

  useEffect(() => {
    if (dbState) {
      setstate(dbState.uneditedProducts);
    }
  }, [removedProduct, dbState, edit]);
  const handleAddProduct = () => {
    //just for simulation\

    let product = `product${Object.keys(state).length + 1}`;

    if (dbProducts[product] !== undefined) {
      updateDb({
        uneditedProducts: {
          ...state,
          [`${product}`]: dbProducts[product],
        },
      });
      setstate({ ...state, [`${product}`]: dbProducts[product] });
    }
  };

  return (
    <div className="addproduct-container">
      <button onClick={() => console.log(state)}>click</button>
      {edit && state !== undefined ? (
        <ProductBuilder
          state={dbProducts[product]}
          product={product}
          saved={() => {
            setEdit(!edit);
            deleteFromDb(`uneditedProducts.${product}`);
          }}
          close={() => setEdit(!edit)}
        />
      ) : (
        <div>
          <Button
            buttonColor="green"
            buttonSize="btn--full"
            onClick={() => {
              firestore
                .collection("Users")
                .doc("products")
                .update(uploadProducts);
            }}
          >
            Save Products
          </Button>

          <h2>Add Product</h2>
          <div className="flexed">
            <input ref={inputRef} />
            <Button
              buttonSize="btn--medium"
              buttonColor="green"
              onClick={() => handleAddProduct()}
            >
              Add
            </Button>
          </div>
          <ProductTable
            edit={(data) => {
              setProduct(data);
              setEdit(!edit);
            }}
            tableHeader={tableHeader}
            tableRow={state}
            actionName="hello"
            removeProduct={(data) => {
              setRemovedProduct(!removedProduct);
              setProduct(data);
              deleteFromDb(`uneditedProducts.${data}`);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default AddProduct;
