import React from 'react';

let backgroundImage = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${"http://www.iglesiabautistapoderdedios.com/prueba/wp-content/uploads/2017/05/Iglesia-Poder-de-Dios.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover"

};

let blankBox={
    heigth:"400px"
}

function Home() {
  return (
    <React.Fragment>
        <div class="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col"  style={backgroundImage}>
                        <div className="text-light display-4">
                            Bienvenidos
                        </div>
                        <div className="blanck box text-transparent" style={blankBox}>sadf</div>

                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
