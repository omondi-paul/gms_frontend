import trainers from "@/data/trainers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllTrainers = ({data}) => {
  return (
    <>
      {data.map((trainer) => (
        <div className="col" key={trainer.id}>
          <div className="feature-style2 mb30">
            <div className="feature-img">
              <Link  href={`/trainer/${trainer.id}`}>
                <Image
                  width={210}
                  height={240}
                  className="bdrs12 w-100 h-100 cover"
                  src={trainer.image}
                  alt="trainers"
                />
              </Link>
            </div>
            <div className="feature-content pt20">
              <h6 className="title mb-1">
                <Link href={`/trainer/${trainer.id}`}>{trainer.name}</Link>
              </h6>
              <p className="text fz15">Broker</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllTrainers;
