import React from "react";
import "./checkout.css";

import { Button, Divider, FormControl, FormHelperText, FormLabel, HStack, Image, Input, PinInput, PinInputField, Text, VStack, Wrap } from '@chakra-ui/react'
export const Checkout = () => {
  return (
   
      <div className="PM">
        <div className="text">Choose your payment method</div>
        <div
          style={{
            
            height: "24rem",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "grid",
            gridTemplateColumns: "30% 70%",
          }}
        >
          <div className="img">
             <VStack     marginTop="2px" width={"96%"} height="90%" align="flex-start" padding={5}  bg="#eeeeee"
           >

            <HStack  >
                <Image w={"2em"} src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
                <Text  fontSize={"0.8em"} >Debit/Credit Card</Text>
            </HStack>
            
            <Divider/>

            
            <HStack>
                <Image w={"2rem"} src="https://images.bewakoof.com/web/Group-1645705428.png" />
                <Text fontSize={"0.8rem"} >WALLET</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={"2rem"} src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
                <Text fontSize={"0.8rem"} >UPI</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={"2rem"} src="https://images.bewakoof.com/web/nb-icon-1645705428.png" />
                <Text fontSize={"0.8rem"} >NET BANKING</Text>
            </HStack>
            
            <Divider/>
            <HStack>
                <Image w={"2rem"} src="https://images.bewakoof.com/web/cod-icon-1645705427.png" />
                <Text fontSize={"0.8rem"} >CASH ON DELIVERY</Text>
            </HStack>
            
            <Divider/>


            </VStack>
 
          </div>
          <div
            style={{
             
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", gap: "30px", padding: "3px" }}>
              <img
                src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"
                width="100rem"
                height="20rem"
              />
              <img
                src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
                width="100rem"
                height="20rem"
              />
              <img
                src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
                width="100rem"
                height="20rem"
              />
              <img
                src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
                width="100rem"
                height="20rem"
              />
            </div>
            <div>
              <input className="last"
                type="tel"
                inputmode="numeric"
                pattern="[0-4\s]{13,19}"
                autocomplete="cc-number"
                maxlength="19"
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <input className="last"
                style={{ width: "75%" }}
                placeholder="Valid through(MM/YY"
              />
              <input className="last"
                style={{ width: "20%" }}
                type="number"
                maxLength="4"
                placeholder="CVV"
              />
            </div>
            <div>
              <input className="last"  type={"text"} placeholder="Name On Card" />
            </div>
            <p>
              This transaction you make is totally secure. We don't save your
              CVV number.
            </p>
            <div style={{
                  width: "100%",
                  margin: "auto",
                  height: "3rem",
                  marginTop:"10px",
                  
                  display:"flex",
                  justifyContent:"center"
                }}>
              <button
                style={{
                  width: "60%",
                   height: "3rem",
                   margin:"auto",
                   borderRadius:"3px",
                   fontSize:"20px",
                   background:"#42a2a2"
                }}
              >
                Pay ₹234
              </button>
            </div>
          </div>
        </div>
      </div>
 
  );
};
