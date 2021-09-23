import React from "react";
import data from "../../data";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";

const Main = () => {
  return (
    <>
      <Section title="Mobile Phones">
        <PhoneList phones={data.phones} />
      </Section>
      <Section title="Laptops">
        <LaptopList laptops={data.laptops} />
      </Section>
    </>
  );
};

export default Main;
