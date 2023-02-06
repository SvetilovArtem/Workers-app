import React from 'react'

interface IconCreatorProps {
    type: string
}

const IconCreator = ({ type }:IconCreatorProps) => {
    switch (type) {
        case 'hide':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_233_221)">
                <path d="M1.99994 12L1.30132 11.7272C1.23281 11.9026 1.23281 12.0974 1.30132 12.2728L1.99994 12ZM21.9999 12L22.6986 12.2728C22.7671 12.0974 22.7671 11.9026 22.6986 11.7272L21.9999 12ZM10.6433 4.32823C10.2319 4.3762 9.93725 4.74861 9.98521 5.16004C10.0332 5.57146 10.4056 5.86611 10.817 5.81814L10.6433 4.32823ZM6.91017 7.15969C7.26377 6.94396 7.37554 6.48243 7.15982 6.12883C6.94409 5.77522 6.48255 5.66345 6.12895 5.87918L6.91017 7.15969ZM10.409 10.4089C10.7019 10.1161 10.7019 9.64119 10.4091 9.34828C10.1162 9.05537 9.64131 9.05535 9.3484 9.34823L10.409 10.4089ZM14.6517 14.6515C14.9446 14.3586 14.9446 13.8838 14.6517 13.5909C14.3588 13.298 13.8839 13.298 13.591 13.5909L14.6517 14.6515ZM19.8469 14.3346C19.5967 14.6648 19.6615 15.1352 19.9916 15.3854C20.3217 15.6356 20.7922 15.5708 21.0424 15.2407L19.8469 14.3346ZM17.8712 18.1207C18.2248 17.9049 18.3365 17.4434 18.1208 17.0898C17.9051 16.7362 17.4435 16.6244 17.0899 16.8402L17.8712 18.1207ZM11.9999 14.25C10.7573 14.25 9.74994 13.2426 9.74994 12H8.24994C8.24994 14.0711 9.92887 15.75 11.9999 15.75V14.25ZM11.9999 5.75C16.3248 5.75 19.8022 8.43405 21.3013 12.2728L22.6986 11.7272C20.9974 7.37124 17.003 4.25 11.9999 4.25V5.75ZM11.9999 18.25C7.67507 18.25 4.19771 15.5659 2.69855 11.7272L1.30132 12.2728C3.00244 16.6288 6.99687 19.75 11.9999 19.75V18.25ZM10.817 5.81814C11.2027 5.77319 11.5972 5.75 11.9999 5.75V4.25C11.5396 4.25 11.087 4.27651 10.6433 4.32823L10.817 5.81814ZM2.69855 12.2728C3.54347 10.1093 5.01822 8.31394 6.91017 7.15969L6.12895 5.87918C3.94076 7.21417 2.25863 9.27586 1.30132 11.7272L2.69855 12.2728ZM9.74994 12C9.74994 11.3784 10.001 10.8169 10.409 10.4089L9.3484 9.34823C8.67054 10.026 8.24994 10.9646 8.24994 12H9.74994ZM13.591 13.5909C13.183 13.999 12.6215 14.25 11.9999 14.25V15.75C13.0353 15.75 13.9739 15.3294 14.6517 14.6515L13.591 13.5909ZM21.3013 11.7272C20.9314 12.6743 20.4406 13.5513 19.8469 14.3346L21.0424 15.2407C21.7211 14.345 22.2793 13.3465 22.6986 12.2728L21.3013 11.7272ZM17.0899 16.8402C15.6237 17.7347 13.8983 18.25 11.9999 18.25V19.75C14.1768 19.75 16.1721 19.1573 17.8712 18.1207L17.0899 16.8402Z" fill="#808185"/>
                <path d="M4.53033 3.46967C4.23744 3.17678 3.76256 3.17678 3.46967 3.46967C3.17678 3.76256 3.17678 4.23744 3.46967 4.53033L4.53033 3.46967ZM19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM3.46967 4.53033L19.4697 20.5303L20.5303 19.4697L4.53033 3.46967L3.46967 4.53033Z" fill="#808185"/>
                </g>
                <defs>
                <clipPath id="clip0_233_221">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            )
        case 'heart':
            return (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z" stroke="#151317" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )

        case 'phone':
            return (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.55399 5.24003L6.17099 1.33503C5.78099 0.88503 5.06599 0.88703 4.61299 1.34103L1.83099 4.12803C1.00299 4.95703 0.765988 6.18803 1.24499 7.17503C4.10661 13.1 8.88503 17.8851 14.806 20.755C15.792 21.234 17.022 20.997 17.85 20.168L20.658 17.355C21.113 16.9 21.114 16.181 20.66 15.791L16.74 12.426C16.33 12.074 15.693 12.12 15.282 12.532L13.918 13.898C13.8482 13.9712 13.7562 14.0195 13.6563 14.0354C13.5564 14.0513 13.4541 14.0339 13.365 13.986C11.1354 12.7021 9.28598 10.8503 8.00499 8.61903C7.95702 8.52978 7.93964 8.42726 7.95554 8.32719C7.97144 8.22711 8.01972 8.13502 8.09299 8.06503L9.45299 6.70403C9.86499 6.29003 9.90999 5.65003 9.55399 5.23903V5.24003Z" stroke="#512689" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> 
            )

        case 'email':
            return (
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V14C0.5 14.3978 0.658035 14.7794 0.93934 15.0607C1.22064 15.342 1.60218 15.5 2 15.5H20C20.3978 15.5 20.7794 15.342 21.0607 15.0607C21.342 14.7794 21.5 14.3978 21.5 14V2C21.5 1.60218 21.342 1.22064 21.0607 0.93934C20.7794 0.658035 20.3978 0.5 20 0.5ZM18.35 2L11 7.085L3.65 2H18.35ZM2 14V2.6825L10.5725 8.615C10.698 8.7021 10.8472 8.74877 11 8.74877C11.1528 8.74877 11.302 8.7021 11.4275 8.615L20 2.6825V14H2Z" fill="#512689"/>
                </svg>
            )    
        case 'arrow':
            return (
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.497 0.989027L8.99999 8.29703L1.50299 0.989027C1.36905 0.858193 1.18923 0.784947 1.00199 0.784947C0.814751 0.784947 0.634939 0.858193 0.500992 0.989027C0.436135 1.05257 0.384611 1.12842 0.349436 1.21213C0.314261 1.29584 0.296143 1.38573 0.296143 1.47653C0.296143 1.56733 0.314261 1.65721 0.349436 1.74092C0.384611 1.82463 0.436135 1.90048 0.500992 1.96403L8.47649 9.74003C8.61655 9.87655 8.8044 9.95295 8.99999 9.95295C9.19558 9.95295 9.38343 9.87655 9.52349 9.74003L17.499 1.96553C17.5643 1.90193 17.6162 1.8259 17.6517 1.74191C17.6871 1.65792 17.7054 1.56769 17.7054 1.47653C17.7054 1.38537 17.6871 1.29513 17.6517 1.21114C17.6162 1.12715 17.5643 1.05112 17.499 0.987526C17.365 0.856693 17.1852 0.783447 16.998 0.783447C16.8108 0.783447 16.6309 0.856693 16.497 0.987526V0.989027Z" fill="#151317"/>
                </svg>
            )
        case 'exit':
            return (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z" fill="#F8F8F8"/>
                </svg>
            )
        case 'back':
            return (
                <svg width="7" height="15" viewBox="0 0 7 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83749 14.0013C5.68809 14.0018 5.54048 13.9688 5.4055 13.9048C5.27052 13.8407 5.15161 13.7473 5.05749 13.6313L0.227488 7.63125C0.0804062 7.45232 0 7.22788 0 6.99625C0 6.76463 0.0804062 6.54018 0.227488 6.36125L5.22749 0.361252C5.39723 0.157036 5.64114 0.0286112 5.90556 0.0042315C6.16999 -0.0201482 6.43327 0.0615137 6.63749 0.231252C6.8417 0.400991 6.97013 0.644902 6.99451 0.909329C7.01889 1.17375 6.93723 1.43704 6.76749 1.64125L2.29749 7.00125L6.61749 12.3613C6.73977 12.508 6.81745 12.6868 6.84133 12.8763C6.86521 13.0659 6.83429 13.2583 6.75223 13.4308C6.67018 13.6034 6.54042 13.7488 6.37831 13.8499C6.2162 13.9509 6.02852 14.0035 5.83749 14.0013Z" fill="#F8F8F8"/>
                </svg>
            )
    
        default:
            return null
    }
}

export default IconCreator