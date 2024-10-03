'use client';

import workout_plans from "@/data/workout_plans"; 
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function WorkOutFiltering() {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 9;

  // Calculate items for the current page
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const currentItems = workout_plans.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="pt0 pb90 bgc-f7">
      <div className="container">
        <div className="row">
          {/* Render workout plans */}
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
                  <div className="sale-sticker-wrap">
                    {/* Assuming you may want to add a sticker for featured plans */}
                    {/* Uncomment if needed */}
                    {/* <div className="list-tag fz12">
                      <span className="flaticon-electricity me-2" />
                      FEATURED
                    </div> */}
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/workout/${plan.id}`}>{plan.title}</Link>
                  </h6>
                  <p className="list-text">{plan.classes}</p>
                  {/* You can add additional metadata here if needed */}
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center">
                    <Link href={`/workout/${plan.id}`} className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        {/* <PaginationTwo pageCapacity={9} data={sortedFilteredData} pageNumber={pageNumber} setPageNumber={setPageNumber}/> */}
      </div>
    </section>
  );
}
