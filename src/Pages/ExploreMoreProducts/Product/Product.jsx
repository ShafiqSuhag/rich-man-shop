import React from 'react';

const Product = () => {
    return (
        <div>
            <div class="overflow-visible shadow-xl card bg-base-100 flex-shrink-0 col-span-3 row-span-4 mx-2 xl:mx-0 w-72 xl:w-auto">
                <div class="dropdown"><div tabindex="0">
                    <figure>
                        <img src="/tailwind-css-component-card-1.png" width="300" height="187" alt="Card Tailwind CSS Component" class="rounded-t-box" />
                    </figure>
                    test
                </div>
                    <div tabindex="0" class="py-2 dropdown-content">
                        <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                            <div class="card-body"><h2 class="font-extrabold capitalize card-title">card component</h2> <p class="text-sm text-neutral-content text-opacity-80">Card component is used to show products, features and more.</p> <div class="flex justify-end mt-4"><a href="/components/card" class="btn btn-primary btn-sm xl:btn-md">
                                See component
                            </a></div></div></div></div></div> <div class="card-body"><div class="flex items-center font-extrabold card-title">
                                Card Component
                                <div class="dropdown dropdown-top dropdown-end"><div tabindex="0"><div tabindex="0" class="inline-block mx-1 btn btn-circle btn-ghost btn-xs text-info"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div> <div tabindex="0" class="py-2 dropdown-content"><div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box"><div class="card-body"><h2 class="font-extrabold capitalize card-title">dropdown component</h2> <p class="text-sm text-neutral-content text-opacity-80">helper dropdown can show an element when focused.</p> <div class="flex justify-end mt-4"><a href="/components/dropdown" class="btn btn-primary btn-sm xl:btn-md">
                                    See component
                                </a>
                                </div>
                                </div>
                                </div>
                                </div></div></div> <div class="dropdown w-full"><div tabindex="0"><div class="mb-2"><div class="badge badge-ghost">May 14th</div></div></div> <div tabindex="0" class="py-2 dropdown-content"><div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box"><div class="card-body"><h2 class="font-extrabold capitalize card-title">badge component</h2> <p class="text-sm text-neutral-content text-opacity-80">Use badge component to highlight small inline items</p> <div class="flex justify-end mt-4"><a href="/components/badge" class="btn btn-primary btn-sm xl:btn-md">
                                    See component
                                </a>
                                </div>
                                </div>
                                </div>
                                </div>
                    </div>
                    <p class="text-sm text-base-content text-opacity-80">
                        Use card component to easily show blog posts, products, features, items and more.
                    </p>
                    <div class="justify-end card-actions">
                        <div class="dropdown dropdown-top dropdown-end">
                            <div tabindex="0">
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                            <div tabindex="0" class="py-2 dropdown-content">
                                <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                                    <div class="card-body">
                                        <h2 class="font-extrabold capitalize card-title">button component</h2>
                                        <p class="text-sm text-neutral-content text-opacity-80">Buttons come in various shapes, colors and sizes</p>
                                        <div class="flex justify-end mt-4"><a href="/components/button" class="btn btn-primary btn-sm xl:btn-md">
                                            See component
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;