'use client'

import React, { useEffect, useState } from 'react';
import AllTrainers from './trainers/AllTrainers';
import trainers from '@/data/trainers'; 
import PaginationTwo from '../listing/PaginationTwo';

export default function FilteringTrainer() {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageItems, setPageItems] = useState([]);
    const [pageContentTrac, setPageContentTrac] = useState([]);
    
    useEffect(() => {
        setPageItems(trainers.slice((pageNumber - 1) * 15, pageNumber * 15));
        setPageContentTrac([((pageNumber - 1) * 15) + 1, pageNumber * 15, trainers.length]);
    }, [pageNumber]);

    return (
        <section className="our-trainers pt-0">
            <div className="container">
                <div
                    className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <AllTrainers data={pageItems} />
                </div>

                <div className="row justify-content-center mt20">
                    <PaginationTwo pageNumber={pageNumber} setPageNumber={setPageNumber} data={trainers} pageCapacity={15} />
                </div>
            </div>
        </section>
    );
}
