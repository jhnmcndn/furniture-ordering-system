import React from 'react'
import Banner from "../../components/banner";
import CompanyLogo from "../../components/companyLogo";
import FeaturedProducts from "../../components/featuredProducts";
import Footer from "../../components/footer";
import TopCategories from "../../components/topCategories";
import RecentlyAdded from "../../components/recentlyAdded";

const Home = (props) => {
   const {propData} = props
// const dataProps = props console.log(propData?.map(it => it.title), '12312321eto')
   return (
         <>
            <Banner/>
            <CompanyLogo/>
            <FeaturedProducts/>
            <TopCategories />
            <RecentlyAdded />
            <Footer/>
         </>
   )
}
export default Home