import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getCategories} from './ApiCore'
import FilterByCategory from './FilterByCategory'

const Shop = ()  => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then(res => setCategories(res))
    }, [])
    return (
        <div>
            <Layout
             title="Shop page" 
             description = "choice your favourite product in our store "
              className="container">

                <div class="row">
                    <div class="col-md-4">
                        <FilterByCategory categories={categories} />
                    </div>
                    <div class="col-md-8">
                        content
                        
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur modi ipsum minima quas velit quasi nesciunt, excepturi, tempore aliquid deserunt sunt dicta dignissimos vero veniam eaque autem molestiae minus alias consequuntur praesentium magni fuga? Cupiditate architecto suscipit nostrum soluta, modi iste minus qui! Nam, consequuntur assumenda esse exercitationem doloremque maxime, doloribus nisi eius omnis unde temporibus odit quo in ratione dicta autem, a cupiditate veritatis voluptate officiis. Hic quisquam aut neque harum voluptatum? Aliquid, inventore perferendis magnam sunt laboriosam fugit odio natus ducimus assumenda ullam commodi excepturi! Minima tempore veritatis possimus officia nihil exercitationem quidem ad magnam labore repudiandae sint vel, illum totam est dolores, ut blanditiis. Molestias enim facilis a distinctio provident neque veritatis illo placeat dolorum nostrum quibusdam quas excepturi iure dicta, quidem dolor deleniti error omnis quis saepe tempora non cum. Cumque, quo. Commodi ex iure quasi reprehenderit voluptatibus asperiores at a consequuntur ullam totam ipsum, doloremque repudiandae vero necessitatibus odio deserunt numquam, recusandae delectus minus rerum quisquam dolorum labore dolores voluptas. Natus, impedit dolor corporis provident ipsam voluptatum. Quod sed reiciendis amet alias ducimus! Id odio voluptatem commodi asperiores sit sed eveniet reprehenderit eligendi? Ut eius aspernatur ipsa debitis quasi aperiam possimus earum facere explicabo veniam?
                    </div>
                </div>

              </Layout>

        </div>
    )
}

export default Shop
