'use client';

import workout_plans from "@/data/workout_plans"; 
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const WorkOutFiltering = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 9;

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const currentItems = workout_plans.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        <div className="row">
          {currentItems.map(plan => (
            <div key={plan.id} className="col-sm-6 col-lg-4">
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image 
                    src={plan.image} 
                    alt={plan.title} 
                    width={382} 
                    height={248} 
                    className="w-100 cover"
                    style={{ height: "230px" }}
                  />
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/workout/${plan.id}`}>{plan.titles}</Link>
                  </h6>
                  <p className="list-text">{plan.time}</p>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center">
                    <Link href={`/single-v4/${plan.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkOutFiltering;