import React from "react";
import humedad from "../assets/hum.png";
import temperatura from "../assets/tem.png";
import bateria_ok from "../assets/bateria_ok.png";

function Escritorio() {
  return (
    // <main className="content">
    <div
      className="header"
      style={{ backgroundColor: "rgb(31, 30, 119)", height: "50px" }}
    >
      <br />
      <br />
      <div className="container p-4">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3" style={{ fontSize: "14px" }}>
            <strong>Escritorio</strong>
          </h1>

          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div
                className="card border-left-primary shadow h-100 py-2"
                style={{ background: "#44749d" }}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                        Areas
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-danger">
                        -3.65%
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
              <div
                className="card border-left-success shadow h-100 py-2"
                style={{ background: "#e32d40" }}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                        Reportes
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-success">
                        6.65%
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-receipt-cutoff"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
              <div
                className="card border-left-success shadow h-100 py-2"
                style={{ background: "#ff9317" }}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                        Alertas
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-success">
                        -5.25%
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-exclamation-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
              <div
                className="card border-left-success shadow h-100 py-2"
                style={{ background: "#429398" }}
              >
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-white text-uppercase mb-1">
                        Graficas
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-danger">
                        -2.25%
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="bi bi-bar-chart-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  CAMARA 1 MP (6)
                </h5>
              </div>
              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>80.82 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-17.72 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T9-CC1 <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T13-CC1 <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T10-CC1 <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      T9-CC1
                    </span>
                    <h6 style={{ fontSize: "12px" }}>38%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1puer
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      T11-CC1
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S108cF
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1F33C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  CAMARA 2 MP (6)
                </h5>
              </div>

              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>88.43 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-14.53 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T14-CC2 <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          001_C2 <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T15-CC2 <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      SF142c
                    </span>
                    <h6 style={{ fontSize: "12px" }}>38%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1puer
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      SF1_17
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S108cF
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1F33C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3" style={{ background: "#242a30" }}>
            <h6 className="m-0 font-weight-bold text-white">
              PRE-CAMARA ALTAMAR (1)
            </h6>
          </div>
          <div className="card-body">
            <div className="row" style={{ width: "220px" }}>
              <div
                className="col-lg-6"
                style={{
                  textAlign: "center",
                  marginTop: "7px",
                  marginBottom: "20px",
                }}
              >
                {/* <img src={humedad} style={{height: "2.75rem"}} /><br/> */}
                <i
                  className="bi bi-circle-fill"
                  style={{ color: "darkred" }}
                ></i>
                <br />
                <span style={{ fontSize: "12px", color: "#707478" }}>
                  PCC-T1
                </span>
                <p style={{ fontSize: "12px", color: "#707478" }}>
                  24.14 °C
                  <br />
                  93.05 %
                </p>
              </div>
              <div
                className="col-lg-6"
                style={{ textAlign: "center", marginTop: "7px" }}
              >
                <img src={bateria_ok} style={{ height: "2.75rem" }} />
                <span style={{ fontSize: "12px", color: "#707478" }}>
                  PCC-T1
                </span>
                <br />
                <span style={{ fontSize: "12px", marginRight: "35px" }}>
                  46%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  FRIGORIFICO 1 (5)
                </h5>
              </div>

              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>88.43 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-14.53 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkgreen",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkgreen",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          SF142c
                          <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S1puer
                          <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          SF1_17
                          <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      SF142c
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1puer
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      SF1_17
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S108cF
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1F33C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  FRIGORIFICO 2 (5)
                </h5>
              </div>

              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>88.43 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-14.53 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T14-CC2 <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          001_C2 <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          T15-CC2 <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      C2_57C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      C2_89c
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      C2_79C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      C2_67C
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      C2puer
                    </span>
                    <h6 style={{ fontSize: "12px" }}>100%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  FRIGORIFICO 3 (4)
                </h5>
              </div>

              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>88.43 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-14.53 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkgreen",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S1-F3 <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S2-F3 <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S3-F3 <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S1-F3
                    </span>
                    <h6 style={{ fontSize: "12px" }}>45%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S2-F3
                    </span>
                    <h6 style={{ fontSize: "12px" }}>60%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S3-F3
                    </span>
                    <h6 style={{ fontSize: "12px" }}>40%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S4-F3
                    </span>
                    <h6 style={{ fontSize: "12px" }}>44%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="card">
              <div className="card-header" style={{ background: "#242a30" }}>
                <h5 className="card-title mb-0 font-weight-bold text-white">
                  FRIGORIFICO 4 (4)
                </h5>
              </div>

              <div className="row" style={{ width: "500px" }}>
                <div
                  className="col-lg-6"
                  style={{
                    textAlign: "center",
                    marginTop: "7px",
                    marginBottom: "30px",
                  }}
                >
                  <img src={humedad} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Humedad Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>88.43 (%)</span>
                </div>
                <div
                  className="col-lg-6"
                  style={{ textAlign: "center", marginTop: "7px" }}
                >
                  <img src={temperatura} style={{ height: "2.75rem" }} />
                  <br />
                  <span style={{ fontSize: "12px", color: "#707478" }}>
                    Temperatura Promedio
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>-14.53 (°C)</span>
                </div>

                <div
                  className="card-body pb-2"
                  style={{
                    width: "440px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                    height: "300px",
                  }}
                >
                  <table
                    className="table"
                    style={{
                      border: "#707478 3px solid",
                      width: "400px",
                      height: "250px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderRight: "dashed #707478",
                            height: "75px",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderRight: "dashed #707478" }}>
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              top: "50px",
                            }}
                          ></i>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S5-F4 <br />
                          <span>-13.81 °C</span>
                          <br />
                          <span>89.37 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S6-F4 <br />
                          <span>-13.34 °C</span>
                          <br />
                          <span>89.27 %</span>
                        </td>
                        <td
                          style={{
                            fontSize: "10px",
                            position: "relative",
                            left: "94px",
                            borderTop: "dashed #707478",
                          }}
                        >
                          S7-F4 <br />
                          <span>-13.16 °C</span>
                          <br />
                          <span>89.16 %</span>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td
                          style={{
                            borderTop: "dashed #707478",
                            borderRight: "dashed #707478",
                          }}
                        >
                          <i
                            className="bi bi-circle-fill"
                            style={{
                              color: "darkred",
                              fontSize: "13px",
                              position: "relative",
                              left: "100px",
                              bottom: "20px",
                            }}
                          ></i>
                        </td>
                        <td style={{ borderTop: "dashed #707478" }}></td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      position: "relative",
                      left: "405px",
                      top: "-273px",
                      width: "58px",
                    }}
                  >
                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S5-F4
                    </span>
                    <h6 style={{ fontSize: "12px" }}>37%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S6-F4
                    </span>
                    <h6 style={{ fontSize: "12px" }}>38%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S7-F4
                    </span>
                    <h6 style={{ fontSize: "12px" }}>56%</h6>

                    <img src={bateria_ok} style={{ width: "30%" }} />
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#707478",
                        fontWeight: "500",
                      }}
                    >
                      S8-F4
                    </span>
                    <h6 style={{ fontSize: "12px" }}>54%</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3" style={{ background: "#242a30" }}>
            <h6 className="m-0 font-weight-bold text-white">DESPACHO (1)</h6>
          </div>
          <div className="card-body">
            <div className="row" style={{ width: "220px" }}>
              <div
                className="col-lg-6"
                style={{
                  textAlign: "center",
                  marginTop: "7px",
                  marginBottom: "15px",
                }}
              >
                <i
                  className="bi bi-circle-fill"
                  style={{ color: "darkgreen" }}
                ></i>
                <br />
                <span style={{ fontSize: "12px", color: "#707478" }}>
                  PCC-T1
                </span>
                <p style={{ fontSize: "12px", color: "#707478" }}>
                  24.14 °C
                  <br />
                  93.05 %
                </p>
              </div>
              <div
                className="col-lg-6"
                style={{ textAlign: "center", marginTop: "7px" }}
              >
                <img src={bateria_ok} style={{ height: "2.75rem" }} />
                <span style={{ fontSize: "12px", color: "#707478" }}>
                  embarq
                </span>
                <br />
                <span style={{ fontSize: "12px", marginRight: "35px" }}>
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </main>
  );
}

export default Escritorio;
