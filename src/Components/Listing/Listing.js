import React, { useEffect } from "react";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import DropDown from "../DropDownMenu/DropDown";
import "./Listing.css";
import Button from "../Buttons/Button";
import { useDB } from "../../contexts/DBContext";

function Listing() {
  const [settings, setSettings] = useState({});
  const [editorValue, setEditorValue] = useState("");

  const { dbState, updateDb } = useDB();
  useEffect(() => {
    if (dbState) {
      setSettings(dbState.settings);
      setEditorValue(dbState.editorValue);
    }
  }, [dbState]);
  function handleChange(evt) {
    const value = evt.target.value;

    setSettings({
      ...settings,
      [evt.target.name]: value,
    });
  }
  function handleChecked(event) {
    let isChecked = event.target.checked;

    setSettings({
      ...settings,
      [event.target.name]: isChecked,
    });
  }

  return (
    <div className="listing-container">
      <div className="flexed">
        <div>
          <h2>Shipping Policies</h2>
          <DropDown
            labelname="Default Prime Policy "
            name="prime"
            options={[
              `${settings.prime}`,
              "Same-day",
              "2-days (Recommended)",
              "5-Days",
              "7-Days",
            ]}
            onChange={handleChange}
          />

          <DropDown
            labelname="Default Not Prime SHORT Policy "
            name="npShort"
            options={[
              `${settings.npShort}`,
              "3-Days",
              "5-Days",
              "7-Days(Recommended)",
              "9-Days",
            ]}
            onChange={handleChange}
          />
          <DropDown
            labelname="Default Not Prime LONG Policy "
            name="npLong"
            options={[
              `${settings.npLong}`,
              "14-Days(Recommended)",
              "20-Days",
              "30-Days",
            ]}
            onChange={handleChange}
          />
          <h2>Return Policy</h2>
          <DropDown
            name="returns"
            options={[
              `${settings.returns}`,
              "30-Days Returns Accepted, Seller Pays (Recommended)",
              "30-Days Returns Accepted, Buyer Pays",
              "Returns Are NOT Accepted",
            ]}
            onChange={handleChange}
          />
          <h2>Payment policy (default)</h2>
          <DropDown
            name="payment"
            options={[
              `${settings.payment}`,
              "Managed Payments",
              "Paypal: Immediete pay",
            ]}
            onChange={handleChange}
          />

          <h2>Default Item Location</h2>
          <DropDown
            name="country"
            labelname=" Country"
            options={[`${settings.country}`, "United States", "United Kingdom"]}
            onChange={handleChange}
          />
          <label>City </label>
          <input
            value={settings.city !== undefined ? settings.city : ""}
            name="city"
            type="text"
            placeholder="Add City"
            onChange={handleChange}
          />
          <label>ZIP Code </label>
          <input
            value={settings.zip !== undefined ? settings.zip : ""}
            name="zip"
            placeholder="Add ZIP Code"
            onChange={handleChange}
          />
        </div>
        <div className="container">
          <h2>Default Listing Settings</h2>
          <label>Desired quantities when listing a product</label>
          <input
            value={settings.quantity !== undefined ? settings.quantity : ""}
            name="quantity"
            type="number"
            placeholder="Add desired quantity"
            onChange={handleChange}
          />
          <label>additional profit</label>
          <input
            value={
              settings.additionalProfit !== undefined
                ? settings.additionalProfit
                : ""
            }
            type="number"
            name="additionalProfit"
            placeholder="Add desired additional profit %"
            onChange={handleChange}
          />
          <div className="flexed">
            <div>
              <label>Fill images up to 12</label>

              <label>Remove Prime Shipping Cost</label>
              <label>Set not prime items as O/S</label>
              <label>3x Price when items is O/S</label>
            </div>
            <div>
              <input
                defaultChecked={settings.fillImages}
                className="checkbox"
                type="checkbox"
                name="fillImages"
                onClick={handleChecked}
              />

              <input
                defaultChecked={settings.noshipingcost}
                className="checkbox"
                type="checkbox"
                name="noshipingcost"
                onClick={handleChecked}
              />
              <input
                defaultChecked={settings.notprimestock}
                className="checkbox"
                type="checkbox"
                name="notprimestock"
                onClick={handleChecked}
              />
              <input
                defaultChecked={settings.multiply}
                className="checkbox"
                type="checkbox"
                name="multiply"
                onClick={handleChecked}
              />
            </div>
          </div>

          <h2>Fees</h2>
          <label>Set Ebay fee percent</label>
          <input
            value={settings.EbayFee !== undefined ? settings.EbayFee : ""}
            type="number"
            name="EbayFee"
            placeholder="%"
            onChange={handleChange}
          />
          <label>Set paypal fee percent ( + 0.30c )</label>
          <input
            value={settings.PaypalFee !== undefined ? settings.PaypalFee : ""}
            type="number"
            name="PaypalFee"
            placeholder="%"
            onChange={handleChange}
          />
          <h2>PayPal Email</h2>
          <input
            value={
              settings.PayPalEmail !== undefined ? settings.PayPalEmail : ""
            }
            name="PayPalEmail"
            type="email"
            placeholder="Add Paypal Email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="editor-container">
        <h2>Description Footer</h2>
        <p>
          The text here will be added to the original description when you list
          an item
        </p>

        <Editor
          name="descFooter"
          value={editorValue}
          apiKey="c6vnj0gx81xgzbxze4xe96d89qt2vzlu9awhccbv4qclc269"
          init={{
            selector: "textarea#basic-example",
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            setup: function (editor) {
              editor.on("blur", function (e) {
                let value = editor.getContent();

                setEditorValue(value);
              });
            },
          }}
        />
      </div>

      <Button
        buttonColor="green"
        buttonSize="btn--full"
        onClick={() => {
          updateDb({ settings: settings, editorValue: editorValue });
        }}
      >
        Save Changes
      </Button>
    </div>
  );
}

export default Listing;
