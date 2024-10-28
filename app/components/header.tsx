import React from 'react'
import { HOME_PAGE_URL } from '@/config/config'


const TopHeader = ({pageName, subName}:{pageName:string,subName?:string}) => {
    // basicFetchFormData.append("action","GetCurrencies");

    // const currency:any = await fetchApiPost(basicFetchFormData);
    
    
    // var currencyArray = currency.currencies.currency;

    // console.log(currencyArray);
    
  return (
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{`${pageName} | Free Developer Tools`}</title>
    {/* Meta Description */}
    <meta
        name="description"
        content="CodHost is collection of tools where developer can use their daily mostly used tools online for free"
    />
    <meta
        name="keywords"
        content="Dev Tools, Encoder, Decoder, Small Dev Tools"
    />
    <meta name="author" content="CodHost" />

    <meta name="google-adsense-account" content="ca-pub-2943492028472623"/>
    {/* Favicons */}
    <link href={`${HOME_PAGE_URL()}/images/favicon.png`} rel="icon" />
    <link href={`${HOME_PAGE_URL()}/images/apple-touch-icon.png`} rel="apple-touch-icon" />
    <meta name="apple-mobile-web-app-title" content="CodHost" />
    <meta name="application-name" content="CodHost" />

    {/* Bootstrap Icon Css */}
    <link href={`${HOME_PAGE_URL()}/css/bootstrap-icons.min.css`} rel="stylesheet" />
    {/* Flaticon Icon Css */}
    <link href={`${HOME_PAGE_URL()}/css/uicons-thin-rounded.css`} rel="stylesheet" />
    {/* Swiper Slider Css */}
    <link href={`${HOME_PAGE_URL()}/css/swiper-bundle.min.css`} rel="stylesheet" />
    {/* Main Css */}
    <link href={`${HOME_PAGE_URL()}/css/style.css`} rel="stylesheet" />
    </>
  )
}

export default TopHeader