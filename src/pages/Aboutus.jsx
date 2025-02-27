import React from "react";


const Aboutus = () => {



    return (
        <>
            <section className="bg-slate-300 p-6 shadow-lg">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div>
                        <img src="./images/network.png" className="w-full h-auto" alt="Network" />
                    </div>

                    {/* Text Content */}
                    <div className="p-4">
                        <h3 className="text-start text-lg font-semibold text-gray-800">About Us</h3>
                        <h1 className="text-start mb-5 text-4xl md:text-5xl font-bold text-gray-900">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </h1>

                        <hr className="w-24 border-gray-900 border-2 mb-5" />

                        <p className="text-start text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ut, molestiae consectetur inventore
                            repellat voluptas quibusdam atque harum exercitationem officia, esse ipsa fugiat. Laboriosam est, similique
                            esse optio nobis dolorem. Illum sunt numquam iure! Quaerat nostrum et provident eum quasi non delectus
                            aspernatur ducimus expedita accusamus, ad voluptate, velit magnam dolorum reprehenderit illo. Aut similique
                            non maiores architecto ea est.
                        </p>


                    </div>
                </div>
            </section>


            <div>

                <section className="text-center my-10">
                    <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-slate-700 drop-shadow-lg">
                        What We Offer
                    </h3>
                    <div className="mx-auto mt-2 h-1 w-24 bg-yellow-500 rounded-full"></div>
                </section>


                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.freepik.com/free-vector/people-group-silhouette-logo_361591-2344.jpg"
                                alt="Excellence"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Excellence in Every Step"</h2>
                            <p className="text-start">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus non explicabo delectus fuga. Quos, laborum? Aliquid autem vero blanditiis, accusamus deserunt mollitia quos doloribus culpa dicta fugit totam excepturi perferendis!
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.freepik.com/free-vector/top-service-badge_1284-5019.jpg?t=st=1740676881~exp=1740680481~hmac=282d50fd87b008aec1b6e73466387aa21304c694b3f429bdea361ae8cc7cea14&w=1060"
                                alt="Success"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Your Success, Our Promise</h2>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam odio rerum est natus quae ea cupiditate dignissimos laudantium atque quas magnam error iure officia rem, excepturi facilis ipsa maiores.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.freepik.com/premium-vector/premium-quality-golden-badge-isolated-white-background-vector-illustration_12454-10106.jpg?w=1380"
                                alt="Quality"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Quality Beyond Expectations</h2>
                            <p className="text-start">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad aut corrupti cumque recusandae harum repudiandae ipsam laborum soluta, illum sapiente iure eius doloremque minus labore? Doloribus iure in itaque.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </>


    );
}


export default Aboutus;
