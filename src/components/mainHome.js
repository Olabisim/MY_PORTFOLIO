import React from "react";
import { Link } from 'react-router-dom'
import '../styles/main.css';


export const MainHome = () => {
        return (
                
                
        <main>
                <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        Passionate Software DEVELOPER
                </h2>
                </div>

                <div className="row">
                <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">who am i?</h3>
                        <p className="paragraph">I am a driven software engineer with a passion for programming and solving difficult problems.

                        Technology is something with which I've always felt a deep connection. I have high aspirations and am constantly striving to outdo myself with every challenge I undertake.
                        </p>
                        
                
                        <h3 className="heading-tertiary u-margin-bottom-small">i'm A Fresh Computer Science Graduate</h3>
                        <p className="paragraph">My goal is to join a team that is truly passionate about what they create and are proud to make the world a better place.</p>

                        <a href="/certify" className="btn-text">
                        
                                check certifications &rarr;
                        
                        </a>
                </div>
                <div className="col-1-of-2">
                        <div className="composition">
                        {/*

                        <img srcset="./img/nat-1.jpg 300w, ./img/nat-1-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_1"
                        className="composition__photo composition__photo--p1" src="./img/nat-1-large.jpg" />

                        <img srcset="./img/nat-2.jpg 300w, ./img/nat-2-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_2"
                        className="composition__photo composition__photo--p2" src="./img/nat-2-large.jpg" />

                        <img srcset="./img/nat-3.jpg 300w, ./img/nat-3-large.jpg 1000w"
                        sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="Photo_3"
                        className="composition__photo composition__photo--p3" src="./img/nat-3-large.jpg" />

                        */}
                        </div>
                </div>
                </div>
                </section>
                <section className="section-features">

                <div className="row">
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-earth u-margin-bottom-small">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                        <path fill-rule="evenodd" clip-rule="evenodd" fill="#94795D" d="M87.259 100.139c.169-.325.331-.612.469-.909.087-.19.221-.228.41-.223 1.133.032 2.266.067 3.4.078.963.01 1.928-.008 2.892-.019 1.086-.013 2.172-.07 3.257-.039 1.445.042 2.853.325 4.16.968 1.561.769 2.742 1.94 3.547 3.483a8.71 8.71 0 01.931 3.14c.172 1.608.059 3.179-.451 4.717-.632 1.906-1.832 3.365-3.499 4.458-1.283.841-2.69 1.338-4.198 1.622-1.596.301-3.197.204-4.798.209-1.756.007-3.511-.031-5.267-.051-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.83 2.83 0 001.087-.413c.184-.122.26-.44.332-.685.062-.214.065-.449.067-.675.025-3.425.051-6.849.065-10.272a44.077 44.077 0 00-.065-2.596c-.034-.605-.357-1.019-1.077-1.162-.56-.111-1.124-.197-1.687-.296l-.189-.059zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042-.292-1.613-.998-3.018-2.238-4.119-2.005-1.779-4.419-2.053-6.949-1.841-.576.048-.7.245-.709.837-.014.84-.028 1.68-.029 2.52-.004 2.664-.004 5.328 0 7.992.001.758.009 1.516.031 2.272.024.774.305 1.429 1.063 1.729 1.195.473 2.452.529 3.706.336 2.003-.307 3.404-1.474 4.344-3.223.744-1.388.954-2.903 1.016-4.461zm4.869 9.071c-.024-.415.146-.758.356-1.073.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755.038-.262.074-.527.077-.792a879.6 879.6 0 00.059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269.112-.271.219-.552.377-.796.059-.09.258-.125.392-.122.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759 1.149.612 1.792 1.559 1.976 2.849.192 1.355-.219 2.497-1.209 3.404-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466 1.188.487 2.133 1.248 2.633 2.463.395.959.395 1.959.161 2.953-.364 1.556-1.389 2.591-2.722 3.374-1.251.735-2.605 1.163-4.047 1.235-1.33.067-2.666.042-3.999.057l-.772.004a996.106 996.106 0 01-3.854-.096l-.117-.032zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974.008.426-.007.864.085 1.274.138.613.418 1.166 1.106 1.342a6.671 6.671 0 002.818.124c1.177-.205 2.116-.795 2.631-1.916.382-.833.439-1.716.308-2.618-.174-1.188-.805-2.05-1.854-2.615-.688-.371-1.422-.598-2.204-.628-.876-.033-1.753-.035-2.629-.062-.246-.007-.28.118-.279.32.005.934.002 1.869.002 2.805zm1.865-4.475c.479-.024 1.021-.031 1.56-.085 1.032-.103 1.759-.622 2.138-1.609.193-.501.185-1.017.19-1.538.015-1.357-.777-2.469-2.066-2.929-.995-.355-2.021-.361-3.053-.333-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319l1.601.071z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#50382B" d="M10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07-.05-.281-.034-.576-.021-.867.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988.031-.667.062-1.335.065-2.002.009-1.642-.001-3.282.006-4.924.001-.384-.132-.67-.49-.826a43.787 43.787 0 00-1.285-.546c-.204-.082-.469-.127-.445-.401.024-.279.281-.352.523-.407 1.002-.229 2.005-.452 3.004-.696.322-.079.63-.212 1.015-.346.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307.048.037.209-.03.289-.092.854-.65 1.758-1.211 2.789-1.538 1.597-.507 2.968-.037 3.928 1.34.338.485.339.485.808.146.805-.585 1.647-1.101 2.589-1.441 2.068-.747 4.055.201 4.774 2.284.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001-1.344.012-2.688.019-4.031.05-.234.006-.295-.052-.307-.271-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028.015-1.878.054-3.761-.041-5.635-.099-1.944-1.642-2.979-3.526-2.481a5.194 5.194 0 00-1.69.814c-.175.125-.208.269-.194.488.053.828.086 1.657.093 2.486.012 1.451-.006 2.902 0 4.354.002.588.203.813.784.949l.863.199.16.036c.012.276.023.552.01.828-.008.173-.142.188-.292.185-.839-.021-1.679-.049-2.518-.047-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758.114-2.01.196-4.021.007-6.03a3.695 3.695 0 00-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271-.635.162-1.208.453-1.75.82a.795.795 0 00-.378.695c0 2.005.007 4.01.013 6.014l.011.773c.012.539.241.823.776.939.344.078.692.131 1.082.203z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M71.001 105.285c.155.754.152 1.432-.402 1.946-.55.511-1.246.339-1.925.225.063.358.133.662.167.97.247 2.289-.738 3.988-2.861 4.959-.802.366-1.653.502-2.522.572-.432.034-.81.364-.851.719-.042.36.184.73.636.838.533.127 1.089.163 1.636.226 1.174.134 2.361.195 3.521.405 1.754.316 2.733 1.847 2.424 3.609-.275 1.568-1.183 2.709-2.449 3.584-2.133 1.478-4.473 1.91-6.965 1.156-1.425-.432-2.43-1.369-2.777-2.885-.174-.759.011-1.446.582-1.961.679-.61 1.418-1.154 2.129-1.73l.23-.231-.264-.185c-.725-.344-1.305-.815-1.53-1.633-.077-.277.003-.459.238-.601.4-.241.798-.486 1.193-.735.186-.116.37-.236.543-.37.236-.18.215-.314-.067-.418-.656-.242-1.239-.593-1.691-1.133-.755-.901-.969-1.974-.907-3.107.097-1.77 1.058-2.936 2.62-3.686 1.857-.891 3.72-.947 5.613-.135.7.3 1.438.364 2.189.312.561-.04 1.051-.252 1.49-.711zm-6.843 12.681c-1.394-.012-1.831.16-2.649.993-.916.934-.911 2.229.003 3.167.694.711 1.56 1.044 2.523 1.144 1.125.116 2.233.069 3.255-.494 1.09-.603 1.632-1.723 1.387-2.851-.203-.931-.889-1.357-1.724-1.602-.95-.278-1.932-.331-2.795-.357zm-2.738-8.908c.051.387.072.779.158 1.158.223.982.65 1.845 1.627 2.282 1.147.515 2.612.294 3.114-1.316a4.853 4.853 0 00-.113-3.274 2.512 2.512 0 00-.91-1.184c-.996-.695-2.793-.787-3.525.749-.238.499-.331 1.03-.351 1.585z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M47.35 105.038c.037.171.111.365.113.56.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636 1.942-.585 3.882.478 4.515 2.456.24.752.335 1.525.344 2.311.02 1.746.032 3.492.05 5.238.006.627.078.739.671.92a7.4 7.4 0 001.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754-1.678-.003-3.355.007-5.033.021-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484.282-.042.562-.107.837-.179.283-.073.419-.282.457-.562.019-.142.044-.284.043-.426-.024-1.908.007-3.818-.097-5.723-.084-1.541-1.26-2.459-2.807-2.354a4.047 4.047 0 00-2.071.743c-.413.289-.496.706-.494 1.155.008 1.784.025 3.568.044 5.353.004.391.015.782.052 1.17.039.424.188.595.604.687.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819-1.735-.007-3.47.004-5.204.023-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064.033-2.271.045-4.541.068-6.812.003-.326-.12-.579-.424-.714a53.88 53.88 0 00-1.287-.544c-.238-.098-.51-.16-.519-.489-.006-.232.242-.437.581-.506.681-.138 1.368-.253 2.041-.422.67-.167 1.328-.391 2.062-.611z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F382B" d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123-1.9 1.633-4.864 2.188-7.287.967-1.034-.521-1.794-1.32-2.289-2.357-.759-1.595-.949-3.272-.553-4.99.392-1.699 1.421-2.93 2.961-3.727 1.584-.819 3.252-1.139 5.011-.709 2.225.543 3.824 2.357 4.142 4.667.057.405.079.815.098 1.026zm-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6-.073-1.246-.353-2.433-1.075-3.476-.685-.988-1.618-1.571-2.832-1.656-1.359-.096-2.501.664-2.902 2.052-.602 2.084-.398 4.115.66 6.024.461.832 1.144 1.446 2.059 1.769 1.793.631 3.383-.186 3.85-2.022.172-.678.222-1.387.328-2.081z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4F372B" d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152-1.007 1.31-2.391 2.01-3.965 2.305-1.861.348-3.609.032-5.104-1.217-.71-.594-1.195-1.355-1.515-2.221-.525-1.42-.656-2.875-.333-4.358.345-1.587 1.241-2.8 2.63-3.614 1.606-.939 3.339-1.358 5.19-.936 2.38.544 3.754 2.095 4.262 4.443.102.474.116.964.171 1.446zm-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886-.617-.861-1.443-1.401-2.502-1.552-1.726-.246-2.854.778-3.228 2.169-.488 1.817-.335 3.612.42 5.335.471 1.074 1.215 1.911 2.358 2.317 1.782.633 3.396-.205 3.847-2.034.166-.669.216-1.367.319-2.053z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009-2.543.4-5.083.814-7.624 1.226-2.627.426-5.256.835-7.878 1.289-.929.16-2.079-.031-2.454 1.253l-.18.061.127-7.678-.129-18.526 1.224-.21c2.001-.327 4.002-.66 6.006-.979 2.39-.379 4.782-.749 7.174-1.119 1.056-.162 2.113-.313 3.169-.471z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339-6.658-6.28-11.529-13.673-13.928-22.586-.661-2.452-1.101-4.945-1.243-7.479-.1-1.774-.243-3.563-.117-5.328.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537 1.344 3.956 2.677 7.916 4.004 11.879 4.169 12.451 8.333 24.905 12.509 37.354.082.243.293.442.445.661l-.664 2.268z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M82.362 33.544c-1.057.157-2.114.309-3.169.471-2.392.37-4.784.74-7.174 1.119-2.003.318-4.004.651-6.006.979l-1.224.21-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198.423 198.423 0 00-.141-4.88c-.04-.873-.181-1.742-.237-2.615-.033-.502.011-1.008.022-1.512.624 1.209 1.235 2.427 1.876 3.627 1.013 1.897 2.628 3.295 4.083 4.82 5.746 6.031 9.825 13.039 12.368 20.957z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253 2.622-.454 5.251-.863 7.878-1.289 2.541-.411 5.081-.825 7.624-1.226.301-.047.615-.008.923-.009-.475 1.696-.849 3.429-1.452 5.078-.685 1.87-1.513 3.696-2.392 5.486a37.595 37.595 0 01-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002-.906.889-1.972 1.614-2.966 2.414l-.258-.176-.927-.792-.959-2.104a31.65 31.65 0 01-1.065-7.516l.018-.428.131-1.854c.043-.633.101-1.265.128-1.898.096-2.276.182-4.554.273-6.832z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392-2.101-6.271-4.176-12.551-6.274-18.824a3423.013 3423.013 0 00-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672 1.73 5.12 3.457 10.241 5.169 15.367 2.228 6.67 4.441 13.343 6.667 20.014.089.266.235.512.375.811l.512-.596-.127 7.678z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M48.076 25.458c.161.209.391.395.471.631a3379.774 3379.774 0 015.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824 1.27 3.79 2.569 7.57 3.867 11.392l.584-.221-.131 1.854-.119.427c-.203 2.029-.374 4.062-.622 6.087-.124 1.015-.389 2.011-.59 3.015-.151-.219-.363-.418-.445-.661-4.177-12.449-8.34-24.903-12.509-37.354a3010.791 3010.791 0 00-4.004-11.879c-.068-.201-.26-.359-.394-.537l2.5-6.754z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811-2.226-6.671-4.439-13.344-6.667-20.014a4618.057 4618.057 0 00-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586 1.284 3.76 2.556 7.523 3.822 11.289 1.182 3.518 2.346 7.04 3.542 10.552.08.235.359.401.545.601l.01.798.129 18.526z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M64.779 35.525c-.187-.199-.465-.365-.545-.601-1.195-3.512-2.36-7.034-3.542-10.552a2495.581 2495.581 0 00-3.822-11.289c-.075-.219-.283-.392-.429-.586 1.504-1.473 2.961-2.999 4.526-4.404 1.391-1.248 2.509-2.586 2.561-4.559l.11-.393.396.998c-.01.504-.055 1.01-.022 1.512.057.873.198 1.742.237 2.615.073 1.625.108 3.253.141 4.88.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.929 82.642c.201-1.004.466-2 .59-3.015.248-2.024.419-4.058.622-6.087l.051-.008.05.009a31.65 31.65 0 001.065 7.516c-.135.178-.324.335-.396.535-.555 1.566-1.079 3.145-1.637 4.71-.076.214-.29.381-.439.568l-.571-1.96.665-2.268z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.835 86.871c.149-.188.363-.354.439-.568.558-1.565 1.082-3.144 1.637-4.71.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552l-.532-3.045z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477-.641 1.836-1.252 3.682-1.898 5.517-.082.232-.309.415-.468.621l-.255-3.177z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.621 93.091c.16-.206.387-.389.468-.621.646-1.835 1.258-3.681 1.898-5.517.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716-.121-.158-.337-.311-.347-.475-.038-.642-.011-1.289-.008-1.934z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78-.931 2.387-1.078-.379z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.055 95.88l.931-2.387.192 2.824-1.123-.437z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176-.805 1.426z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.242 73.542l-.05-.009-.051.008.119-.427-.018.428z"/></svg></span>
                        <h3 className="heading-tertiary u-margin-bottom-small">mongodb</h3>
                        <p className="feature-box__text">
                                I have a year plus experience with mongodb and mongoose. This is my major database
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-leaf">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"/></svg>
                        </span>
                        <h3 className="heading-tertiary u-margin-bottom-small">express</h3>
                        <p className="feature-box__text">
                        I have a year plus experience with express. This is my major something
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-map">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
                        </span>
                        <h3 className="heading-tertiary u-margin-bottom-small">react</h3>
                        <p className="feature-box__text">
                        I have two years plus experience with react and react-native. I also gained vast familiarity with redux-toolkit and develop desktop applications with react-native.
                        </p>
                        </div>
                </div>
                <div className="col-1-of-4">
                        <div className="feature-box">
                        <span className="feature-box__icon lnr lnr-heart-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#83CD29" d="M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209a.261.261 0 00.246 0l7.937-4.581a.248.248 0 00.122-.215v-9.16a.256.256 0 00-.123-.219l-7.934-4.577a.254.254 0 00-.245 0l-7.933 4.578a.259.259 0 00-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198a1.676 1.676 0 01-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587a1.743 1.743 0 011.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16a1.68 1.68 0 01-.833 1.448l-7.937 4.582a1.651 1.651 0 01-.834.223m2.453-6.311c-3.475 0-4.202-1.595-4.202-2.932a.23.23 0 01.23-.229h1.026a.23.23 0 01.228.194c.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777a.235.235 0 01-.06.176.236.236 0 01-.168.073h-1.031a.228.228 0 01-.223-.179c-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"/><path fill="#404137" d="M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856a1.017 1.017 0 00-1.019-.002l-8.416 4.859a1.018 1.018 0 00-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812a.508.508 0 00.006-.885l-8.468-4.86a.507.507 0 01-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52a.505.505 0 01.507 0l2.637 1.52a.507.507 0 01.255.439v2.396a.507.507 0 00.764.44l5.039-2.932"/><path fill="#83CD29" d="M88.984 67.974a.2.2 0 01.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932a.194.194 0 01-.195 0l-1.614-.932a.194.194 0 01-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"/><path fill="#404137" d="M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666a.251.251 0 01-.254 0l-2.89-1.666a.255.255 0 01-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668a.248.248 0 01.255 0l2.891 1.668a.258.258 0 01.126.221v3.338zm.781-24.716a.511.511 0 00-.756.444v12.915a.359.359 0 01-.177.308.359.359 0 01-.356 0l-2.108-1.215a1.017 1.017 0 00-1.015 0l-8.418 4.858a1.018 1.018 0 00-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861a1.02 1.02 0 00.508-.881V50.821c0-.368-.2-.708-.521-.888l-5.011-2.795"/><path fill="#83CD29" d="M38.238 59.407a1.014 1.014 0 011.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861a1.02 1.02 0 01-1.017 0l-8.415-4.861a1.02 1.02 0 01-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"/><path fill="#404137" d="M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843a.99.99 0 00-.464-.133h-.087a.993.993 0 00-.464.133l-8.416 4.843a1.02 1.02 0 00-.509.883l.018 13.04c0 .182.095.351.254.439a.487.487 0 00.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226a.994.994 0 01.508-.137c.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864a.508.508 0 00.76-.439l.019-13.04"/></svg>
                        </span>
                        <h3 className="heading-tertiary u-margin-bottom-small">node</h3>
                        <p className="feature-box__text">
                        I have two year plus experience with nodejs. Due to my lack of consistency, i am only proeficient in authentication, API endpoints, scraping & CRUD implementation.
                        </p>
                        </div>
                </div>
                </div>
                </section>

                <section id="section-tours" className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        A Gallery of recent projects i've built
                </h2>
                </div>

                <div className="row">
                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-1">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--1">
                                youtube <br />clone
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>react-native</li>
                                <li>redux</li>
                                <li>react-navigation</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficulty: normal</li>
                        </ul>

                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {/*
                                <p className="card__price-only">Only</p>
                                */}
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://github.com/Olabisim/youtube_clone" target='_blank' rel="noreferrer" className="btn btn--white">view github</a>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-2">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--2">
                                ECOMMERCE <br /> APP
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>MONGODB</li>
                                <li>EXPRESS</li>
                                <li>REACT</li>
                                <li>NODE</li>
                                <li>Difficulty: medium</li>
                        </ul>
                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {/*
                                <p className="card__price-only">Only</p>
                                */}
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://olabecommerceapp.herokuapp.com/" target='_blank' rel="noreferrer"  className="btn btn--white">View now!</a>
                        </div>
                        </div>
                        </div>
                </div>


                <div className="col-1-of-3 ">
                        <div className="card">
                        <div className="card__side card__side--front">
                        <div className="card__picture card__picture-3">
                        &nbsp;
                        </div>
                        <h4 className="card__heading">
                        <span className="card__heading-span--3">
                                COVID <br /> 19
                        </span>
                        </h4>
                        <div className="card__details">
                        <ul>
                                <li>NODE</li>
                                <li>EXPRESS</li>
                                <li>SCSS</li>
                                <li>LESS</li>
                                <li>Difficulty: hard</li>
                        </ul>
                        </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                        <div className="card__price-box">
                                {
                                /*
                                <p className="card__price-only">Only</p>
                                */
                                }
                                <p className="card__price-value">...</p>
                        </div>
                        <a href="https://guarded-tundra-34082.herokuapp.com/" target='_blank' rel="noreferrer" className="btn btn--white">View now!</a>
                        </div>
                        </div>
                        </div>
                </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                <a href="#btn" className="btn btn--green">All other works</a>
                </div>
                </section>


                <section className="section-stories">
                <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop>
                        <source src="./img/video.mp4" type="video/mp4" />
                        <source src="./img/video.webm" type="video/webm" />
                        Your browser is not supported!
                </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                        I make people genuienly happy
                </h2>
                </div>

                <div className="row">
                <div className="story">
                        <figure className="story__shape">
                        <img src="./img/nat-8.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, consequuntur impedit ipsam, magni
                        nostrum voluptas corporis repellendus reprehenderit vel iure totam? Nisi velit blanditiis corrupti nulla
                        quisquam, fugit voluptatibus. Voluptas corporis repellendus reprehenderit vel iure totam.</p>
                        </div>
                </div>
                </div>

                <div className="row">
                <div className="story">
                        <figure className="story__shape">
                        <img src="./img/nat-9.jpg" alt="Person on a tour" className="story__img" />
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Wow! What an experience!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit debitis, consequuntur impedit ipsam,
                        magni
                        nostrum voluptas corporis repellendus reprehenderit vel iure totam? Nisi velit blanditiis corrupti
                        nulla
                        quisquam, fugit voluptatibus. Voluptas corporis repellendus reprehenderit vel iure totam.</p>
                        </div>
                </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                <a href="#btn-te" className="btn-text">Read all stories &rarr;</a>
                </div>
                </section>

                <section className="section-booking">
                <div className="row">
                <div className="booking">
                        <div className="booking__form">
                        <form action="#" className="form">
                        <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                                WORK?
                        </h2>
                        </div>
                        <div className="form__group">
                        <input type="text" className="form__input" placeholder="Full name" id="name" required />
                        <label htmlFor="name" className="form__label">Full name</label>
                        </div>

                        <div className="form__group">
                        <input type="email" className="form__input" placeholder="Email address" id="email" required />
                        <label htmlFor="email" className="form__label">Email address</label>
                        </div>

                        <div className="form__group u-margin-bottom-medium">
                        <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="small" name="size" />
                                <label htmlFor="small" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Single project
                                </label>
                        </div>

                        <div className="form__radio-group">
                                <input type="radio" className="form__radio-input" id="large" name="size" />
                                <label htmlFor="large" className="form__radio-label">
                                <span className="form__radio-button"></span>
                                Join a team
                                </label>
                        </div>
                        </div>
                        <div className="form__group">
                        <button className="btn btn--green">Next step &rarr;</button>
                        </div>
                        </form>
                        </div>
                </div>
                </div>
                </section>
        </main>

        )
}
