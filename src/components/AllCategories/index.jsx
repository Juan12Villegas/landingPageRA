"use client";
import React from "react";
import Burguers from "../../components/Products/Burguers"
import Favorites from "../../components/Products/Favorites"
import Sandwichs from "../../components/Products/Sandwichs"
import LQE from "../../components/Products/LQE"
import Chickens from "../../components/Products/Chickens"
import Breakfast from "../../components/Products/Breakfast"

export default function Main() {
    return (
        <div className="mt-[5px]">
            <Favorites />
            <Burguers />
            <LQE />
            <Breakfast />
            <Chickens />
            <Sandwichs />
        </div>
    )
}