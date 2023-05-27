import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Skills() {
  return (
    <div className="w-full mx-auto mt-64 text-white rounded-lg shadow-lg max-w-xm lg:max-w-4xl">
      <div>
        <div className="flex items-center justify-center">
          <div className="mt-2 mr-6 text-sm rounded-full w-7 h-7 lg:w-12 lg:h-12 lg:my-7">
            <svg
              className="text-white fill-current animation"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              enable-background="new 0 0 1000 1000"
            >
              <metadata>
                {" "}
                Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
              </metadata>
              <g>
                <path d="M987.7,584.5l2.3-154.2l-101.1-27.1c-8.9-35.1-21.9-68.5-39.5-99.2l55.1-88.9L797.1,104.3l-90.6,52.3c-30.4-18.2-63.2-32.4-98.1-42.3l-23.8-102L430.1,10l-27,101.2c-35,8.7-68.5,22-99.2,39.3l-89-55.1L104.1,202.9l52.4,90.5c-18.2,30.4-32.5,63.2-42.3,98.2l-102,23.8L10,569.8l101.2,26.9c8.7,35.3,22.1,68.5,39.4,99.5l-55.2,88.9l107.6,110.7l90.6-52.6c30.2,18.2,63.2,32.7,98,42.4l23.9,102.1L570,990l26.9-101.3c35.1-8.5,68.6-21.8,99.3-39.3l88.9,55.3l110.8-107.5l-52.6-90.7c18.2-30.4,32.7-63.2,42.4-98L987.7,584.5z M495.9,773.7C344.8,771.3,224.2,647,226.4,495.9C228.7,344.6,353,224,504.1,226.4c151.1,2.3,271.8,126.5,269.5,277.7C771.4,655.2,647,776,495.9,773.7z" />
              </g>
            </svg>
          </div>
          <h1 className="text-2xl font-semibold lg:text-6xl">
            Skills Overview
          </h1>
        </div>
        <p className="mt-2 text-2xl text-center lg:text-lg">
          I am a Front End Web Developer and here are my skills :
        </p>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto mt-10 lg:flex-row">
        <Fade left>
          <div className="p-2 m-2 bg-blue-600 w-lg:1/2 lg:p-4 lg:m-6 rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 p-2 mx-auto text-sm bg-gray-600 rounded-full lg:w-20 lg:h-20 my-7">
              <svg
                className="w-12 h-12 text-white fill-current "
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <g>
                    <g>
                      <g>
                        <path d="M942.5,77.2H57.5C31.2,77.2,10,98.5,10,124.7V680c0,26.2,21.2,47.5,47.5,47.5h331V835H259.7c-24.2,0-43.9,19.7-43.9,43.9c0,24.2,19.7,43.9,43.9,43.9h480.7c24.2,0,43.9-19.7,43.9-43.9c0-24.2-19.7-43.9-43.9-43.9H611.5V727.4h331c26.2,0,47.5-21.2,47.5-47.5V124.7C990,98.5,968.8,77.2,942.5,77.2z M918.8,656.2H81.2V148.4h837.6V656.2z" />
                        <path d="M234.5,429.1l149.7,69.6c3.9,1.8,8,2.7,12.2,2.7c5.5,0,11-1.6,15.7-4.6c8.4-5.4,13.4-14.5,13.4-24.5v-0.8c0-11.3-6.6-21.6-16.8-26.4L315,401.7l93.6-43.5c10.2-4.8,16.8-15.1,16.8-26.4v-0.8c0-10-5-19.2-13.4-24.5c-4.7-3-10.1-4.5-15.7-4.5c-4.2,0-8.5,0.9-12.2,2.7l-149.7,69.6c-10.2,4.8-16.8,15.1-16.8,26.4v2.1C217.6,414,224.2,424.4,234.5,429.1z" />
                        <path d="M426.8,570.9c5.5,7.5,14.2,11.9,23.5,11.9h0.7c12.7,0,23.8-8.1,27.7-20.2l98.6-305.5c2.8-8.8,1.3-18.6-4.2-26c-5.5-7.5-14.2-11.9-23.5-11.9h-0.7c-12.7,0-23.8,8.1-27.7,20.2l-98.6,305.6C419.8,553.7,421.4,563.5,426.8,570.9z" />
                        <path d="M574.5,331.8c0,11.3,6.6,21.6,16.8,26.4l93.6,43.5l-93.6,43.5c-10.2,4.8-16.8,15.1-16.8,26.4v0.8c0,10,5,19.1,13.5,24.5c4.7,3,10.1,4.6,15.6,4.6c4.3,0,8.4-0.9,12.3-2.7l149.7-69.6c10.2-4.8,16.8-15.1,16.8-26.4v-2.1c0-11.3-6.6-21.6-16.8-26.4l-149.7-69.6c-3.8-1.8-8-2.7-12.2-2.7c-5.6,0-11,1.6-15.7,4.5c-8.4,5.4-13.5,14.5-13.5,24.5V331.8L574.5,331.8z" />
                      </g>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center">Frontend</h2>
            <div className="flex flex-wrap p-2 mt-3 text-xs bg-gray-700 lg:text-sm rounded-xl">
              <Zoom>
                <p className="m-1 skill">React Js</p>
                <p className="m-1 skill">HTML</p>
                <p className="m-1 skill">Tailwind CSS</p>
                <p className="m-1 skill">Bootstrap CSS</p>
                <p className="m-1 skill">CSS</p>
                <p className="m-1 skill">Laravel</p>
              </Zoom>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="p-2 m-2 bg-blue-600 w-lg:1/2 lg:p-4 lg:m-6 rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 p-2 mx-auto text-sm bg-gray-600 rounded-full lg:w-20 lg:h-20 my-7">
              <svg
                className="w-12 h-12 text-white fill-current "
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <g>
                    <g>
                      <g>
                        <path d="M942.5,77.2H57.5C31.2,77.2,10,98.5,10,124.7V680c0,26.2,21.2,47.5,47.5,47.5h331V835H259.7c-24.2,0-43.9,19.7-43.9,43.9c0,24.2,19.7,43.9,43.9,43.9h480.7c24.2,0,43.9-19.7,43.9-43.9c0-24.2-19.7-43.9-43.9-43.9H611.5V727.4h331c26.2,0,47.5-21.2,47.5-47.5V124.7C990,98.5,968.8,77.2,942.5,77.2z M918.8,656.2H81.2V148.4h837.6V656.2z" />
                        <path d="M234.5,429.1l149.7,69.6c3.9,1.8,8,2.7,12.2,2.7c5.5,0,11-1.6,15.7-4.6c8.4-5.4,13.4-14.5,13.4-24.5v-0.8c0-11.3-6.6-21.6-16.8-26.4L315,401.7l93.6-43.5c10.2-4.8,16.8-15.1,16.8-26.4v-0.8c0-10-5-19.2-13.4-24.5c-4.7-3-10.1-4.5-15.7-4.5c-4.2,0-8.5,0.9-12.2,2.7l-149.7,69.6c-10.2,4.8-16.8,15.1-16.8,26.4v2.1C217.6,414,224.2,424.4,234.5,429.1z" />
                        <path d="M426.8,570.9c5.5,7.5,14.2,11.9,23.5,11.9h0.7c12.7,0,23.8-8.1,27.7-20.2l98.6-305.5c2.8-8.8,1.3-18.6-4.2-26c-5.5-7.5-14.2-11.9-23.5-11.9h-0.7c-12.7,0-23.8,8.1-27.7,20.2l-98.6,305.6C419.8,553.7,421.4,563.5,426.8,570.9z" />
                        <path d="M574.5,331.8c0,11.3,6.6,21.6,16.8,26.4l93.6,43.5l-93.6,43.5c-10.2,4.8-16.8,15.1-16.8,26.4v0.8c0,10,5,19.1,13.5,24.5c4.7,3,10.1,4.6,15.6,4.6c4.3,0,8.4-0.9,12.3-2.7l149.7-69.6c10.2-4.8,16.8-15.1,16.8-26.4v-2.1c0-11.3-6.6-21.6-16.8-26.4l-149.7-69.6c-3.8-1.8-8-2.7-12.2-2.7c-5.6,0-11,1.6-15.7,4.5c-8.4,5.4-13.5,14.5-13.5,24.5V331.8L574.5,331.8z" />
                      </g>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center">Backend</h2>
            <div className="flex flex-wrap p-2 mt-3 text-xs bg-gray-700 lg:text-sm rounded-xl">
              <Zoom>
                <p className="m-1 skill">Php</p>
                <p className="m-1 skill">Spring boot</p>

                <p className="m-1 skill">SQL</p>
              </Zoom>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="p-2 m-2 bg-blue-600 lg:w-1/2 lg:p-4 lg:m-6 rounded-2xl">
            <div className="flex items-center justify-center w-16 h-16 p-2 mx-auto text-sm bg-gray-600 rounded-full lg:w-20 lg:h-20 my-7">
              <svg
                className="w-10 h-10 text-white fill-current"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
              >
                <metadata>
                  {" "}
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
                </metadata>
                <g>
                  <path d="M974.3,217.3L812.9,378.7l-141.2-50.4l-50.4-141.2L782.7,25.7C676.8-9.7,555.3,14.7,470.9,99c-82.8,82.8-107.8,201.3-75.2,305.8c-4.4,3.5-8.6,7.2-12.7,11.2L51.6,747.5c-55.5,55.5-55.5,145.4,0,200.9c55.5,55.5,145.4,55.5,200.9,0L584,616.9c4-4,7.8-8.3,11.2-12.7c104.5,32.6,223.1,7.6,305.8-75.2C985.3,444.7,1009.7,323.2,974.3,217.3z" />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-center">Tools</h2>
            <div className="flex flex-wrap p-2 mt-3 text-sm bg-gray-700 rounded-xl">
              <Zoom>
                <p className="m-1 skill">Gitlab</p>
                <p className="m-1 skill ">Gitbash Terminal</p>
                <p className="m-1 skill">Jira</p>
                <p className="m-1 skill">Github </p>
                <p className="m-1 skill">Visual Studio Code</p>

              </Zoom>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
