import React from 'react'
import "../styles/skill.css";

function ProSkillsContainer() {

    return (
        <div className="outer-svg-wrapper fuck">
            {/* <svg>
              <path id="line-skill" ></path>
            </svg> */}

            <div className="svg-wrapper">
                <div className="skills-container">
                    <div className="images-icon single-child">
                        <div className="icons-image" id='one'>
                            <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1356 25.2715C18.835 27.17 14.2967 27.3651 9.73079 25.4166C6.03387 23.8505 2.96639 21.109 1 17.9767C1.94387 18.7598 3.04503 19.3865 4.22484 19.9344C8.9401 22.135 13.6544 21.9843 16.972 19.94C12.2526 16.3374 8.23626 11.6326 5.2475 7.79547C4.61799 7.16887 4.14605 6.38567 3.67412 5.68084C7.29225 8.97014 13.0343 13.1207 15.0789 14.296C10.7535 9.75321 6.8991 4.1147 7.0561 4.27103C13.8993 11.163 20.2707 15.079 20.2707 15.079C20.4815 15.1974 20.6442 15.2959 20.775 15.384C20.9129 15.0347 21.0338 14.672 21.1357 14.296C22.2368 10.3018 20.9787 5.759 18.2254 2C24.5962 5.83752 28.3721 13.0425 26.7985 19.0732C26.7575 19.2359 26.7129 19.3965 26.6648 19.5542C29.8106 23.4703 29.0008 27.6884 28.6076 26.9053C26.901 23.5801 23.7418 24.5969 22.1356 25.2715Z" fill="url(#paint0_linear_87_8231)" />
                                <defs>
                                    <linearGradient id="paint0_linear_87_8231" x1="15.0103" y1="2" x2="15.0103" y2="27.0013" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F88A36" />
                                        <stop offset="1" stop-color="#FD2020" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className="icons-image" id='two'>
                            <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z" fill="white" />
                                <path d="M11.3063 21.91C11.181 21.7232 11.0714 21.4713 10.9824 21.1699C9.37571 19.358 10.6169 16.6916 11.8446 14.881C11.9623 14.6874 12.0905 14.5004 12.2299 14.3215C13.1666 13.1577 13.4089 12.3478 13.481 11.2521C13.4896 11.0481 13.4727 10.7781 13.4533 10.4678C13.3542 8.8837 13.1895 6.25174 16.0159 6.0184C19.5489 5.72669 19.2611 8.97105 19.235 10.8732C19.2339 10.9519 19.2328 11.0285 19.2321 11.1024C19.2225 12.249 19.8209 13.0341 20.4455 13.8535C20.6736 14.1528 20.9052 14.4566 21.112 14.7843C21.1181 14.794 21.1242 14.8038 21.1303 14.8135C22.2218 16.3877 23.2994 18.737 21.7995 20.9653C21.5887 21.7259 21.2695 22.424 20.8434 22.9921C19.3136 25.0052 17.9539 24.8008 16.892 24.6412C16.5717 24.5931 16.2785 24.549 16.0159 24.5711C15.5797 24.5977 15.2301 24.6682 14.9281 24.7292C13.7608 24.9648 13.3046 25.0569 11.3063 21.91Z" fill="#000000" />
                                <path d="M18.0139 7.79452C17.9811 8.72691 16.9921 9.53681 15.8065 9.61167C14.6209 9.68654 13.6907 8.97873 13.7235 8.04633C13.7562 7.11393 14.7453 6.30404 15.9309 6.22917C17.1165 6.16112 18.0466 6.86212 18.0139 7.79452Z" fill="url(#paint0_linear_87_7435)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8656 10.0609C15.8751 10.5679 16.1073 11.0002 16.4334 11.1955C15.3695 11.1002 14.0512 11.4891 14.0512 12.2252C14.0348 13.4703 13.3418 15.0195 12.8429 16.1346C12.7447 16.3543 12.654 16.5571 12.5774 16.7374C12.2686 17.5021 12.0833 18.32 12.0614 19.1221C11.2435 17.9947 11.8378 16.5484 12.1582 15.9207C12.5846 15.0947 12.5764 14.9916 12.4108 15.1852C11.7759 16.2648 10.5803 18.4333 12.0775 19.736C12.125 20.3177 12.2667 20.8813 12.5185 21.3994C14.5228 25.4421 18.2761 23.7815 19.5141 21.6853C19.6788 21.3872 19.812 21.0989 19.9177 20.8203C19.9797 20.8593 20.0461 20.8895 20.1167 20.9094C20.739 21.0932 21.6691 20.3922 21.8918 19.9566C22.1604 19.3781 21.8853 18.9833 20.9683 18.5137C20.9215 18.4906 20.8753 18.4688 20.8297 18.4485C21.1814 16.9676 20.2122 15.4276 19.52 14.7743C19.3909 14.7424 19.3727 14.8156 19.5731 15.0155C20.009 15.4333 20.9572 16.9228 20.4442 18.3091C20.3597 18.2864 20.2784 18.2704 20.2009 18.2616C20.0433 17.3158 19.6231 16.58 19.3294 16.0658C19.2629 15.9493 19.2029 15.8442 19.1538 15.7506C19.055 15.5617 18.9368 15.3661 18.8114 15.1587C18.3283 14.3594 17.739 13.3843 17.739 11.9393C17.6651 11.6214 17.3651 11.4094 16.9658 11.2923C17.4293 11.1988 17.7772 10.6573 17.7652 10.0065C17.7521 9.30545 17.3132 8.74737 16.7892 8.76099C16.2652 8.7746 15.846 9.3599 15.8656 10.0609ZM16.2979 10.2174C16.2914 10.6054 16.4748 10.9184 16.7172 10.9184C16.953 10.9184 17.156 10.6054 17.1626 10.2242C17.1691 9.83631 16.9857 9.52324 16.7434 9.52324C16.501 9.52324 16.3045 9.83631 16.2979 10.2174Z" fill="url(#paint1_linear_87_7435)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5556 11.1498C14.9355 11.1294 15.2106 10.619 15.1779 10.0133C15.1451 9.40754 14.8111 8.93794 14.4311 8.95835C14.0512 8.97877 13.7761 9.48921 13.8089 10.0949C13.8416 10.7006 14.1757 11.1702 14.5556 11.1498ZM14.7848 10.2242C14.8176 10.5441 14.6997 10.8163 14.5294 10.8436C14.3591 10.864 14.1953 10.6258 14.1626 10.3059C14.1298 9.98604 14.2477 9.7138 14.418 9.68658C14.5883 9.66616 14.7521 9.90436 14.7848 10.2242Z" fill="url(#paint2_linear_87_7435)" />
                                <path d="M16.3961 9.99963C16.3764 10.2174 16.4747 10.3944 16.6122 10.408C16.7498 10.4216 16.8808 10.2514 16.9004 10.0405C16.9201 9.82267 16.8218 9.64572 16.6843 9.63211C16.5467 9.6185 16.4157 9.78865 16.3961 9.99963Z" fill="url(#paint3_linear_87_7435)" />
                                <path d="M14.641 10.0542C14.6606 10.2312 14.5886 10.3877 14.4838 10.4013C14.379 10.4149 14.2807 10.2788 14.261 10.0951C14.2414 9.91811 14.3134 9.76158 14.4183 9.74797C14.5231 9.73436 14.6213 9.87728 14.641 10.0542Z" fill="url(#paint4_linear_87_7435)" />
                                <path d="M18.669 17.1525C18.669 18.3503 17.562 19.9021 15.6625 19.8885C13.7039 19.9021 12.8721 18.3503 12.8721 17.1525C12.8721 15.9547 14.169 14.9814 15.7673 14.9814C17.3721 14.9883 18.669 15.9547 18.669 17.1525Z" fill="url(#paint5_linear_87_7435)" />
                                <path d="M17.6346 13.3892C17.615 14.6279 16.8355 14.9205 15.8529 14.9205C14.8704 14.9205 14.1564 14.7367 14.0713 13.3892C14.0713 12.5453 14.8704 12.0552 15.8529 12.0552C16.8355 12.0484 17.6346 12.5385 17.6346 13.3892Z" fill="url(#paint6_linear_87_7435)" />
                                <path d="M11.6936 15.2947C12.3356 14.2807 13.6914 12.7221 11.9491 15.5125C10.5342 17.8129 11.4251 19.2898 11.8836 19.6981C13.2067 20.9232 13.1543 21.7467 12.1128 21.1001C9.87922 19.7185 10.3443 17.3909 11.6936 15.2947Z" fill="url(#paint7_linear_87_7435)" />
                                <path d="M20.9881 15.71C20.4314 14.519 18.6628 11.4972 21.0733 15.009C23.2676 18.1873 21.7283 20.3992 21.4532 20.617C21.1781 20.8348 20.2545 21.2771 20.5231 20.5081C20.7982 19.739 22.1606 18.2826 20.9881 15.71Z" fill="url(#paint8_linear_87_7435)" />
                                <path d="M11.2089 25.1021C9.74165 24.2922 7.61283 25.2586 8.38575 23.0671C8.54296 22.5703 8.15649 21.8217 8.4054 21.3384C8.70016 20.7463 9.33553 20.8756 9.71544 20.4809C10.0888 20.0726 10.3246 19.3648 11.0255 19.4736C11.7198 19.5825 12.1849 20.4673 12.6696 21.5562C13.0299 22.3321 14.3006 23.4278 14.2154 24.299C14.1106 25.6329 12.6499 25.8847 11.2089 25.1021Z" fill="url(#paint9_linear_87_7435)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87664 20.6404C9.51984 21.0307 8.86452 20.9371 8.60152 21.4477C8.43261 21.7756 8.61716 22.2796 8.64206 22.6387C8.67282 23.0824 8.30503 23.711 8.49233 24.0899C8.70268 24.5154 9.65296 24.4602 10.0707 24.5213C11.1019 24.6719 12.8063 26.0065 13.7388 24.9414C14.6504 23.9002 12.8982 22.5825 12.4684 21.6569C12.1889 21.0289 11.7706 19.825 10.992 19.7027C10.4431 19.6175 10.1931 20.2943 9.87664 20.6404ZM11.0583 19.2446C12.0278 19.3967 12.5129 20.6535 12.8707 21.4572C13.4138 22.6227 15.2747 23.8755 14.0686 25.2531C12.9732 26.5043 11.2438 25.1604 10.0086 24.98C9.39166 24.8898 8.41858 24.9546 8.09576 24.3015C7.81821 23.7401 8.2362 23.2316 8.1974 22.672C8.16434 22.1952 7.97565 21.6832 8.2077 21.2306C8.52537 20.5945 9.13864 20.7485 9.55546 20.3192C9.99809 19.8328 10.2634 19.1211 11.0583 19.2446Z" fill="#E68C3F" />
                                <path d="M21.3814 24.7278C22.4556 23.3735 24.8464 23.6525 23.2351 21.7945C22.8945 21.393 22.9993 20.5354 22.5801 20.1679C22.0888 19.7187 21.5451 20.0862 21.0473 19.8548C20.5495 19.603 20.0255 19.1198 19.4163 19.4601C18.8071 19.8072 18.7416 20.7056 18.6827 21.8898C18.6303 22.7405 17.8836 24.1629 18.2831 24.9456C18.8596 26.157 20.3596 25.9937 21.3814 24.7278Z" fill="url(#paint10_linear_87_7435)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8097 19.6982C22.0851 19.6909 22.415 19.7102 22.7248 19.9925C23.1101 20.3322 23.1139 20.8867 23.2592 21.351C23.4312 21.9008 24.0341 22.2149 23.998 22.8597C23.9391 23.9136 22.1138 24.1675 21.552 24.8759C21.0121 25.5447 20.3297 25.9429 19.6821 25.9966C18.7 26.078 17.8888 25.2522 17.9462 24.2439C17.9928 23.4276 18.4086 22.6861 18.4593 21.8764C18.4885 21.29 18.52 20.7464 18.626 20.305C18.7331 19.8589 18.9261 19.4748 19.3083 19.257C20.1453 18.7894 20.9539 19.7206 21.8097 19.6982ZM19.5219 19.6637C19.2953 19.7931 19.1512 20.0316 19.0586 20.4171C18.9649 20.8073 18.9341 21.3073 18.9043 21.9046C18.8543 22.7162 18.4377 23.4572 18.3913 24.2713C18.3499 24.9972 18.9075 25.5961 19.6467 25.5348C20.1484 25.4932 20.7272 25.1764 21.2091 24.5797C21.6397 24.0373 23.5137 23.5336 23.5529 22.8328C23.5785 22.3752 22.9765 21.9459 22.8351 21.4943C22.7245 21.1408 22.7187 20.5932 22.4355 20.3449C22.2545 20.1795 22.0641 20.1549 21.8209 20.1613C21.1162 20.1797 20.1761 19.2992 19.5219 19.6637Z" fill="#E68C3F" />
                                <path d="M20.9156 22.9174C22.5793 20.3652 21.3413 20.3856 20.9221 20.1882C20.5029 19.9841 20.0641 19.5825 19.5728 19.8616C19.0815 20.1474 19.0553 20.8824 19.0422 21.8489C19.0226 22.5431 18.4658 23.7069 18.7999 24.3534C19.206 25.1089 20.1885 24.0131 20.9156 22.9174Z" fill="url(#paint11_linear_87_7435)" />
                                <path d="M10.8682 23.2847C8.37909 21.6105 9.54502 21.0388 9.91839 20.7733C10.3704 20.433 10.3769 19.7797 10.9337 19.8409C11.4904 19.9022 11.8179 20.6168 12.1913 21.5016C12.4664 22.1345 13.4228 22.9784 13.3507 23.7066C13.259 24.5642 11.9424 23.9993 10.8682 23.2847Z" fill="url(#paint12_linear_87_7435)" />
                                <path d="M21.7481 19.9362C21.5516 20.2901 20.7525 20.8481 20.2219 20.6984C19.6783 20.5555 19.4294 19.7592 19.5407 19.1603C19.639 18.4797 20.2219 18.4457 20.9556 18.786C21.735 19.1535 21.9774 19.4666 21.7481 19.9362Z" fill="#000000" />
                                <path d="M21.2108 19.7389C21.0863 19.9839 20.5623 20.3718 20.1955 20.2697C19.8287 20.1676 19.6453 19.6164 19.7042 19.2012C19.7566 18.7316 20.1496 18.7044 20.6475 18.9358C21.1846 19.1944 21.3549 19.4122 21.2108 19.7389Z" fill="url(#paint13_linear_87_7435)" />
                                <path d="M14.4374 10.8576C14.6994 10.6057 15.3348 9.83668 16.54 10.6398C16.7627 10.7895 16.9461 10.8031 17.3719 10.9937C18.23 11.3612 17.8238 12.2459 16.9068 12.5454C16.5138 12.6747 16.1601 13.1715 15.4527 13.1239C14.8435 13.0899 14.6863 12.6747 14.3129 12.4501C13.6514 12.0622 13.5531 11.5381 13.9134 11.2591C14.2736 10.9801 14.4112 10.878 14.4374 10.8576Z" fill="url(#paint14_linear_87_7435)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9933 11.3703C13.8563 11.4764 13.8127 11.6174 13.858 11.7734C13.951 12.0938 14.6216 12.5345 14.8784 12.7501C15.0244 12.8727 15.1914 12.9699 15.4613 12.985C16.0393 13.0239 16.3603 12.5792 16.8667 12.4126C17.1997 12.3038 17.9044 11.8882 17.671 11.4119C17.4718 11.0054 16.8008 10.9803 16.4675 10.7563C15.8939 10.3742 15.4763 10.3769 15.1788 10.4841C14.8528 10.6016 14.2885 11.1416 13.9933 11.3703ZM15.0911 10.2215C15.4781 10.0821 15.9812 10.1021 16.6126 10.5228C17.0276 10.8018 17.659 10.7749 17.9093 11.2858C18.2282 11.9365 17.4555 12.5116 16.947 12.6777C16.4025 12.857 16.0983 13.3061 15.4447 13.2624C15.1058 13.2433 14.8884 13.1158 14.7103 12.9663C14.3408 12.6561 13.7165 12.3613 13.5738 11.8694C13.4946 11.5966 13.6101 11.3204 13.8334 11.1474C14.1943 10.8679 14.682 10.369 15.0911 10.2215Z" fill="#E68C3F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4745 11.5671C17.4772 11.6182 17.4395 11.6619 17.3904 11.6646C16.6971 11.7039 16.2099 12.4951 15.427 12.4951C14.9889 12.4951 14.6421 12.2837 14.3941 12.0804C14.3442 12.0395 13.9033 11.6996 13.9033 11.613C13.9033 11.5618 13.9432 11.5203 13.9925 11.5203C14.0846 11.5203 14.3625 11.8219 14.4659 11.9067C14.6995 12.0982 15.0463 12.3098 15.427 12.3098C16.2021 12.3098 16.6776 11.5195 17.3806 11.4796C17.4298 11.4768 17.4718 11.516 17.4745 11.5671Z" fill="#E68C3F" />
                                <path d="M14.8442 10.7893C14.9752 10.6668 15.3878 10.3333 15.9315 10.6736C16.0494 10.7416 16.1673 10.8165 16.3376 10.9186C16.6848 11.1296 16.5145 11.4358 16.0952 11.6264C15.9053 11.7081 15.5909 11.885 15.3551 11.8714C15.0931 11.8442 14.9162 11.6672 14.7459 11.5515C14.4249 11.3338 14.4446 11.15 14.5952 11.0071C14.7066 10.8982 14.8311 10.7961 14.8442 10.7893Z" fill="url(#paint15_linear_87_7435)" />
                                <defs>
                                    <linearGradient id="paint0_linear_87_7435" x1="16.0578" y1="6.30617" x2="15.8364" y2="9.30598" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.8" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_87_7435" x1="12.8966" y1="22.6721" x2="11.2506" y2="17.2716" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFEED7" />
                                        <stop offset="1" stop-color="#BDBFC2" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_87_7435" x1="12.8966" y1="22.6721" x2="11.2506" y2="17.2716" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFEED7" />
                                        <stop offset="1" stop-color="#BDBFC2" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_87_7435" x1="16.6681" y1="9.65546" x2="16.5748" y2="10.3542" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_87_7435" x1="14.434" y1="9.78294" x2="14.5344" y2="10.3483" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_87_7435" x1="15.7613" y1="15.6306" x2="15.778" y2="19.6272" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.8" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_87_7435" x1="15.8504" y1="13.1247" x2="15.8688" y2="14.7138" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_87_7435" x1="11.72" y1="14.1055" x2="11.72" y2="19.9372" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_87_7435" x1="21.033" y1="13.5359" x2="21.0308" y2="18.8052" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_87_7435" x1="11.4286" y1="22.4374" x2="10.5354" y2="25.4214" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFA63F" />
                                        <stop offset="1" stop-color="#FFFF00" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_87_7435" x1="19.882" y1="21.53" x2="22.2656" y2="24.7801" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFA63F" />
                                        <stop offset="1" stop-color="#FFFF00" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_87_7435" x1="20.5198" y1="18.9333" x2="19.6863" y2="22.8605" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint12_linear_87_7435" x1="11.2464" y1="19.9042" x2="11.4117" y2="24.3239" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint13_linear_87_7435" x1="20.3755" y1="18.8616" x2="20.5688" y2="20.1822" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint14_linear_87_7435" x1="15.7644" y1="10.784" x2="15.7805" y2="13.1098" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FFA63F" />
                                        <stop offset="1" stop-color="#FFFF00" />
                                    </linearGradient>
                                    <linearGradient id="paint15_linear_87_7435" x1="15.5106" y1="10.5638" x2="15.5062" y2="11.7936" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.65" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                        </div>
                        <div className="icons-image" id='three'>
                            <svg width="24px" height="24px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2C8.27812 2 2 8.27812 2 16C2 23.7219 8.27812 30 16 30C23.7219 30 30 23.7219 30 16C30 8.27812 23.7219 2 16 2Z" fill="#FDDD4C" />
                                <path d="M9.86884 19.6502C9.56272 19.1867 10.3327 18.4853 10.0195 17.8963C9.83897 17.5567 9.54389 17.345 9.18952 17.3006C8.84941 17.2579 8.49905 17.3824 8.27573 17.6257C7.92315 18.0094 7.86832 18.5317 7.93652 18.7165C7.96148 18.7842 8.00071 18.8027 8.02879 18.8067C8.22083 18.832 8.32889 18.3391 8.39519 18.2364C8.57851 17.9535 8.99476 17.8679 9.28223 18.0538C9.82731 18.4064 9.35467 18.9762 9.39545 19.4574C9.43513 19.926 9.72709 20.1144 9.98919 20.1342C10.2442 20.1438 10.4225 20.0022 10.4675 19.8988C10.5754 19.6519 10.1207 20.0315 9.86884 19.6502Z" fill="#000000" />
                                <path d="M21.2577 15.3958C21.1147 15.3761 20.9585 15.3765 20.7959 15.3958C20.6725 15.2401 20.5619 14.9879 20.4995 14.6936C20.3885 14.17 20.4001 13.7907 20.7099 13.7414C21.0197 13.6922 21.1694 14.009 21.2804 14.5326C21.3549 14.8846 21.3406 15.208 21.2577 15.3958Z" fill="#000000" />
                                <path d="M17.8646 15.7074C17.8769 15.8259 17.8812 15.9459 17.8777 16.0564C18.1775 16.074 18.3898 16.2163 18.4463 16.3067C18.4753 16.3533 18.4637 16.3837 18.4544 16.3977C18.4233 16.446 18.3568 16.4386 18.2175 16.4229C18.0958 16.4093 17.9648 16.3973 17.8286 16.4035C17.7545 16.6308 17.5348 16.6521 17.3804 16.484C17.2726 16.5168 17.0608 16.6521 16.9976 16.5051C16.9971 16.4322 17.0734 16.3261 17.2115 16.2325C17.1172 16.0526 17.054 15.8601 17.0167 15.6607C16.8209 15.696 16.6447 15.7508 16.5066 15.7938C16.4418 15.814 16.1853 15.9299 16.1552 15.7993C16.1351 15.7091 16.2755 15.5604 16.424 15.453C16.5898 15.3353 16.7738 15.2516 16.9646 15.2033C16.9605 14.9193 17.0329 14.7211 17.2393 14.6883C17.4951 14.6476 17.6537 14.8446 17.7634 15.2093C18.0726 15.2952 18.3814 15.5082 18.5177 15.7284C18.5707 15.8138 18.581 15.8798 18.5466 15.9146C18.4609 16.0034 17.9862 15.7459 17.8646 15.7074Z" fill="#000000" />
                                <path d="M19.8977 16.9838C20.0938 17.0788 20.3096 17.0414 20.38 16.9002C20.4504 16.7589 20.3484 16.5675 20.1522 16.4725C19.9561 16.3775 19.7404 16.4149 19.6699 16.5561C19.5995 16.6973 19.7016 16.8887 19.8977 16.9838Z" fill="#000000" />
                                <path d="M20.8632 16.2824C20.8667 16.0664 20.9991 15.8939 21.1583 15.8965C21.3174 15.8996 21.4435 16.0765 21.44 16.2921C21.4364 16.5077 21.304 16.6802 21.1449 16.6775C20.9857 16.6749 20.8596 16.498 20.8632 16.2824Z" fill="#000000" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1785 18.9281C25.1816 18.9392 25.1772 18.9236 25.1785 18.9281C25.4981 18.9281 26 19.2907 26 20.1667C26 21.0384 25.6336 22.0257 25.5471 22.2449C24.2273 25.3671 21.0772 27.1051 17.3248 26.9951C13.8266 26.8926 10.8432 25.0705 9.53762 22.1001C8.7482 22.101 7.93426 21.7582 7.31556 21.217C6.66343 20.6468 6.26137 19.9089 6.18292 19.1393C6.12185 18.5401 6.19629 17.9826 6.38662 17.4964L5.65337 16.883C2.29777 14.0864 12.7929 2.57165 16.1494 5.46156C16.1663 5.47608 17.2914 6.56551 17.2941 6.56815C18.9125 5.88985 23.2489 4.5984 23.2537 7.60479C23.2555 8.60315 22.611 9.76738 21.5782 10.8238C22.7718 11.9164 22.457 13.4685 22.6471 14.8925L23.0616 15.006C23.8519 15.2247 24.414 15.5164 24.6891 15.8015C24.9641 16.0862 25.1005 16.3621 25.15 16.6855C25.1963 16.9464 25.1901 17.4071 24.8415 17.9223C24.967 18.2547 25.0816 18.5861 25.1785 18.9281ZM9.47834 21.2901C9.59557 21.2927 9.71191 21.2852 9.82602 21.2659C11.0523 21.0595 11.3732 19.7448 11.1713 18.4538C10.9431 16.9961 9.94414 16.4822 9.26616 16.4457C9.07761 16.436 8.90243 16.4527 8.75801 16.4813C7.5478 16.722 6.86447 17.7384 6.99908 19.0584C7.12077 20.253 8.3448 21.2601 9.47834 21.2901ZM6.73743 16.8395C7.14351 16.2574 7.80722 15.8363 8.56054 15.6915C9.51934 13.151 11.1205 10.8102 13.2396 9.19934C14.8122 7.90443 16.5082 6.97559 16.5082 6.97559C16.5082 6.97559 15.5949 5.93016 15.319 5.85316C13.622 5.40084 9.95707 7.89563 7.61689 11.1921C6.67012 12.5257 5.3146 14.8876 5.96272 16.1025C6.04251 16.253 6.49494 16.6397 6.73743 16.8395ZM20.4955 20.7066C20.4981 20.7339 20.4812 20.7621 20.4567 20.7722C20.4567 20.7722 19.0931 21.3983 16.9272 20.737C17.0051 21.3862 17.7924 21.6322 18.3425 21.7213C21.0263 22.1771 23.5355 20.6622 24.1002 20.2807C24.1972 20.2152 24.099 20.3836 24.0815 20.4083C23.3901 21.2887 21.5314 22.3082 19.1132 22.3078C18.0585 22.3073 17.0044 21.9408 16.6174 21.3772C16.017 20.5029 16.5876 19.2265 17.5883 19.3593C19.2798 19.5479 21.0139 19.4062 22.5798 18.6888C23.9451 18.0631 24.4608 17.375 24.3833 16.8175C24.263 15.9535 22.9821 15.8184 22.3346 15.6084C22.0529 15.5164 21.9138 15.4429 21.8822 14.9198C21.8684 14.6914 21.8282 13.8946 21.8135 13.565C21.7877 12.9882 21.7172 12.1993 21.2216 11.8737C21.0923 11.7887 20.9488 11.7478 20.7977 11.7399C20.6772 11.7341 20.6057 11.7507 20.5673 11.7596C20.5587 11.7616 20.5517 11.7632 20.5463 11.7641C20.2786 11.809 20.1146 11.9444 19.9212 12.1041C19.9101 12.1133 19.8988 12.1226 19.8875 12.1319C19.2692 12.6406 18.7472 12.7237 18.1664 12.6991C17.9855 12.6915 17.7991 12.6735 17.6024 12.6544C17.4215 12.6369 17.232 12.6185 17.0302 12.6067L16.7837 12.5926C15.8111 12.5433 14.768 13.3723 14.5946 14.5497C14.4009 15.864 15.1355 16.669 15.6132 17.1925C15.7313 17.3219 15.8337 17.434 15.9025 17.5325C15.9466 17.5919 15.9979 17.6755 15.9979 17.7551C15.9979 17.8502 15.9354 17.9254 15.8744 17.9896C14.8821 18.9968 14.5648 20.5971 14.9388 21.9307C14.9856 22.097 15.0448 22.2563 15.1148 22.4085C15.9921 24.4321 18.7138 25.3746 21.3722 24.5174C23.2354 23.9167 24.8816 22.465 25.2168 20.4624C25.2966 19.9406 25.1794 19.7391 25.0198 19.6418C24.8509 19.5393 24.6485 19.5749 24.6485 19.5749C24.6485 19.5749 24.5562 18.9515 24.295 18.3848C23.5199 18.9884 22.5223 19.4126 21.7627 19.6277C20.5458 19.9724 19.2312 20.1065 17.9737 19.944C17.4636 19.8781 17.1209 19.8338 16.974 20.3049C18.6514 20.9112 20.4268 20.6516 20.4268 20.6516C20.4611 20.6481 20.4919 20.6727 20.4955 20.7066ZM15.656 8.94062C14.7386 9.40394 13.7143 10.2289 12.8825 11.178C12.8531 11.2119 12.8968 11.2585 12.9329 11.2326C13.6514 10.7165 14.6365 10.2369 15.927 9.92622C17.3725 9.57818 18.7642 9.72426 19.6142 9.91654C19.657 9.92622 19.6837 9.85362 19.6459 9.8325C19.0842 9.52142 18.2221 9.31022 17.6106 9.30582C17.5807 9.30538 17.5638 9.27106 17.5816 9.2473C17.6872 9.10694 17.8321 8.96834 17.9645 8.86802C17.9939 8.84514 17.9761 8.79807 17.9386 8.80026C17.1779 8.84638 15.4402 9.63869 15.4465 9.60986C15.491 9.39866 15.6314 9.1197 15.7041 8.98946C15.7215 8.95866 15.6876 8.92478 15.656 8.94062Z" fill="#000000" />
                            </svg>
                        </div>
                    </div>
                    <div className="skills-content">

                        <div className="content-header-skill">

                            <h3 className='text-animate build-in-slideX-left' style={{ transitionDelay: "0ms" }}>Programming Language: Coding languages enable innovation</h3>
                            <p className='text-animate build-in-slideX-left' style={{ transitionDelay: "100ms" }}>My programming skills encompass strong proficiency in Java and JavaScript, supplemented by decent knowledge of Python and C++. I'm continually expanding my expertise to stay at the forefront of coding.</p>

                        </div>


                        <div className="skill-icon-container">
                            <div className="skill-icon-color-mode hidden">
                               
                            <div className="skill-image">
                                    <svg width="100px" height="100px" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                                        <g>
                                            <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E">

                                            </path>
                                            <path d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026" fill="#000000">

                                            </path>
                                            <path d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413" fill="#000000">

                                            </path>
                                        </g>
                                    </svg>
                                    <div className="skill-name">
                                        JavaScript
                                    </div>
                                </div>
                            </div>
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg width="100px" height="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0497 8.44062C22.6378 3.32607 19.2566 0 19.2566 0C19.7598 5.28738 13.813 6.53583 12.2189 10.1692C11.1312 12.6485 12.9638 14.8193 16.0475 17.5554C15.7749 16.9494 15.3544 16.3606 14.9288 15.7645C13.4769 13.7313 11.9645 11.6132 16.0497 8.44062Z" fill="#E76F00" />
                                        <path d="M17.1015 18.677C17.1015 18.677 19.0835 17.0779 17.5139 15.3008C12.1931 9.27186 23.3333 6.53583 23.3333 6.53583C16.5317 9.8125 17.5471 11.7574 19.2567 14.1202C21.0871 16.6538 17.1015 18.677 17.1015 18.677Z" fill="#E76F00" />
                                        <path d="M22.937 23.4456C29.0423 20.3258 26.2195 17.3278 24.2492 17.7317C23.7662 17.8305 23.5509 17.9162 23.5509 17.9162C23.5509 17.9162 23.7302 17.64 24.0726 17.5204C27.9705 16.1729 30.9682 21.4949 22.8143 23.6028C22.8143 23.6029 22.9088 23.5198 22.937 23.4456Z" fill="#5382A1" />
                                        <path d="M10.233 19.4969C6.41312 18.9953 12.3275 17.6139 12.3275 17.6139C12.3275 17.6139 10.0307 17.4616 7.20592 18.8043C3.86577 20.3932 15.4681 21.1158 21.474 19.5625C22.0984 19.1432 22.9614 18.7798 22.9614 18.7798C22.9614 18.7798 20.5037 19.2114 18.0561 19.4145C15.0612 19.6612 11.8459 19.7093 10.233 19.4969Z" fill="#5382A1" />
                                        <path d="M11.6864 22.4758C9.55624 22.2592 10.951 21.2439 10.951 21.2439C5.43898 23.0429 14.0178 25.083 21.7199 22.8682C20.9012 22.5844 20.3806 22.0653 20.3806 22.0653C16.6163 22.7781 14.441 22.7553 11.6864 22.4758Z" fill="#5382A1" />
                                        <path d="M12.6145 25.6991C10.486 25.4585 11.7295 24.7474 11.7295 24.7474C6.72594 26.1222 14.7729 28.9625 21.1433 26.2777C20.0999 25.8787 19.3528 25.4181 19.3528 25.4181C16.5111 25.9469 15.1931 25.9884 12.6145 25.6991Z" fill="#5382A1" />
                                        <path d="M25.9387 27.3388C25.9387 27.3388 26.8589 28.0844 24.9252 28.6612C21.2481 29.7566 9.62093 30.0874 6.39094 28.7049C5.22984 28.2082 7.40723 27.5189 8.09215 27.3742C8.80646 27.2219 9.21466 27.2503 9.21466 27.2503C7.9234 26.3558 0.868489 29.0067 5.63111 29.7659C18.6195 31.8372 29.3077 28.8331 25.9387 27.3388Z" fill="#5382A1" />
                                        <path d="M28 28.9679C27.7869 31.6947 18.7877 32.2683 12.9274 31.8994C9.10432 31.6583 8.33812 31.0558 8.32691 31.047C11.9859 31.6402 18.1549 31.7482 23.1568 30.8225C27.5903 30.0016 28 28.9679 28 28.9679Z" fill="#5382A1" />
                                    </svg>
                                    <div className="skill-name">
                                        Java
                                    </div>
                                </div>

                            </div>
                            <div className="skill-icon-color-mode hidden">
                            <div className="skill-image">
                                    <svg width="100px" height="100px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#327EBD" />
                                                <stop offset="1" stop-color="#1565A7" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FFDA4B" />
                                                <stop offset="1" stop-color="#F9C600" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="skill-name">
                                        Python
                                    </div>
                                </div>
                               

                            </div>
                            <div className="skill-icon-color-mode hidden">
                                <div className="skill-image">
                                    <svg
                                        width={100}
                                        height={100}
                                        aria-label="C++" role="img"
                                        viewBox="0 0 512 512"><path fill="#004482" d="M270.3 445l141.1-81.4c4.1-2.3 7.8-6.4 10.4-11l-166.3-96-166.3 96c2.7 4.6 6.4 8.7 10.4 11L240.8 445c8.1 4.7 21.4 4.7 29.5 0z" /><path fill="#659AD2" d="M421.8 160.5c-2.7-4.6-6.4-8.7-10.4-11L270.3 68c-8.1-4.7-21.4-4.7-29.6 0l-141 81.5c-8.1 4.7-14.8 16.2-14.8 25.6V338c0 4.7 1.7 9.9 4.3 14.6l166.3-96 166.3-96.1z" /><circle cx="256" cy="256" r="86" fill="none" stroke="#ffffff" stroke-width="57" /><path fill="#00599C" d="M421.8 352.6c2.7-4.6 4.3-9.9 4.3-14.6V175.2c0-4.7-1.7-10-4.3-14.7l-166.3 96.1 166.3 96z" /><path stroke="#ffffff" stroke-width="13" d="M350.5 237 v39 M331,257 h39  M397.5 237 v39 M378,257 h39" /></svg>
                                    <div className="skill-name">
                                        C++
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProSkillsContainer