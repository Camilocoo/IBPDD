import React from 'react';
import Breakpoint from 'react-socks';

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

};

let bienvenidos={
    fontSize:"50px",
    color:"#ffc107"
};

let transparent={
    color:"white"
}

let bienvenidosMd={
    fontSize:"114px",
    color:"#ffc107"
};

let bienvenidosLg={
    fontSize:"187px",
    color:"#ffc107"
};

function Home() {
  return (
    <React.Fragment>
        <div class="jumbotron p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col"  style={backgroundImage}>
                        <Breakpoint small down>
                            <div style={bienvenidos}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                               "LES DAMOS LA MAS CORDIAL BIENVENIDA"
                            </div>
                        </Breakpoint>
                         <Breakpoint medium only>
                            <div style={bienvenidosMd}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                                 "LES DAMOS LA MAS CORDIAL BIENVENIDA"
                            </div>
                        </Breakpoint>
                        <Breakpoint large up>
                            <div style={bienvenidosLg}>
                                Bienvenidos
                            </div>
                            <div style={transparent}>
                                 "LES DAMOS LA MAS CORDIAL BIENVENIDA"
                            </div>
                        </Breakpoint>

                    </div>
                </div>
            </div>
        </div>
        <div className="container text-left">
            <p>
                Nos da mucho gusto que nos acompañe en este sitio sin ningún enfoque religioso, respetamos sus creencias, y por lo mismo solamente hablamos de Cristo como una persona viva, que le ama y que desea que usted le conozca en forma personal, de acuerdo como lo indica Dios mismo en su Sagrada Palabra, que es la guía de todos los cristianos.
            </p>
            <p>
                Para la Iglesia Cristiana es muy claro que la justificación del alma es por fe y que la salvación es personal y por gracia, que es un regalo inmerecido de parte de Dios y no algo que un ser humano pueda lograr con buenas obras.
            </p>
             <p>
               El mismo Pablo deja todo en claro cuando dice: “Porque por gracias sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.
            </p>
            <p>
            Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano par que anduviésemos en ellas.” (Efesios 2:8-10) Dicho de otra manera, uno no se salva por que hace buenas obras, uno se salva para hacer buenas obras.
            </p>
            <p>
            Las obras no son la causa de la salvación, son el efecto, la consecuencia de esa salvación. Esta enseñanza de la Palabra de Dios ha sido muy bien asimilada por la Iglesia Bautista Poder de Dios de la ciudad de Miami Beach, Florida, Estados Unidos, congregación hispana que fue fundada en 1998 por los pastores Víctor y Gloria Palacios, dos siervos de Dios que desde un inicio fueron comisionados por el Señor para ir a la comunidad no cristiana y ganarlos para el reino de Dios.
            </p>
            <p>
            Para la Iglesia Bautista Poder de Dios el mensaje de Jesucristo es un mensaje integral, un mensaje que trae las mejores buenas nuevas para la vida eterna, sin que por ello se deje de anunciar las buenas nuevas para la vida temporal.
            </p>
            <p>
            El mismo Dios que sana, salva, santifica y viene pronto, es el mismo Dios que en su gran amor y misericordia provee para las diferentes necesidades de la vida material.
            </p>
            <p>
            Es un gozo inefable para un verdadero cristiano, para una persona nacida de nuevo en Cristo Jesús, poder salvar un alma y servirla con amor en el nombre de aquel que le ha salvado: Jesucristo Una lectura a la misma Misión de la Iglesia Poder de Dios deja muy en claro el por qué y para qué de su existencia: "Proverbios 11:25" El alma generosa será prosperada; Y el que saciare, él también será saciado. "Proverbios 19:17" A Jehová presta el que da al pobre, y el bien que ha hecho, se lo volverá a pagar. Una característica de esta iglesia es la adoración que exalta a Dios y el compañerismo que hay entre nosotros.
            </p>
            <p>
            Estamos muy contentos de que usted haya tomado un momento de su tiempo para visitar nuestro sitio web donde Si quieres cambiar el rumbo de tu vida, o simplemente dar gracias a Dios que te la dio, estás en el lugar correcto La Iglesia PODER DE DIOS es un lugar de paz y tranquilidad. Un lugar de transformación, donde las heridas son sanadas y los cautivos son puestos en libertad. Nuestras puertas y nuestros corazones están abiertos para que usted venga y se haga parte de esta gran familia
            </p>
            <div className="row">
                <div className="col-12 col-lg-6 ">
                   <img src="http://www.iglesiabautistapoderdedios.com/prueba/wp-content/uploads/2017/05/PastoresPalacios.jpg" className="img-fluid text-center" alt="Responsive image"/>
                </div>
                <div className="col-12 col-lg-6">
                    <h5>Pastores</h5>
                    <h6>Victor M.Palacios</h6>
                    <p>Nació en la Ciudad de Veracruz México, cursó sus estudios como Pastor en el Seminario Teológico Bautista en Miami Florida.</p>
                    <h6>Gloria Palacios</h6>
                    <p>Gloria nació en la ciudad de Bogota, Colombia, Cursó sus estudios en el Seminario Teológico Bautista en Miami Florida, Conoció el evangelio en Miami Florida en el año 1985, y junto con su esposo dedico su vida por completo al servicio del señor </p>
                </div>
            </div>

        </div>




    </React.Fragment>
  );
}

export default Home;
