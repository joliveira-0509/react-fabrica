'use client'

import React from 'react';
import "./documentos.module.css";

export default function Documents() {
    return (
        <div className="box">
            <div className="busc">
                <div className="busca">
                    <h1>BUSQUE PELA SUA DOCUMENTAÇÃO</h1>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Buscar" aria-label="Buscar" />
                        <button type="submit" className="search-icon">
                            <i className="bi bi-search" />
                        </button>
                    </div>
                    <a href>
                        <button type="submit">Cadastrar Documentação</button>
                    </a>
                </div>
                <div className="sugestao">
                    <h1>SUGESTÕES</h1>
                    <table>
                        <tbody><tr>
                            <td className="type">RG :</td>
                            <td><button type="submit"><i className="bi bi-caret-down-fill" /></button></td>
                        </tr>
                            <tr>
                                <td className="type">CEP :</td>
                                <td><button type="submit"><i className="bi bi-caret-down-fill" /></button></td>
                            </tr>
                            <tr>
                                <td className="type">FICHAS :</td>
                                <td><button type="submit"><i className="bi bi-caret-down-fill" /></button></td>
                            </tr>
                            <tr>
                                <td className="type">LAUDOS :</td>
                                <td><button type="submit"><i className="bi bi-caret-down-fill" /></button></td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
            <div className="resul">
                <div className="cad-donw">
                    <div className="txt">
                        <h1>Nome do Documento</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip
                        </h2>
                    </div>
                    <button><i className="bi bi-cloud-download" />
                    </button>
                </div>
                <div className="cad-donw">
                    <div className="txt">
                        <h1>Nome do Documento</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip
                        </h2>
                    </div>
                    <button><i className="bi bi-cloud-download" />
                    </button>
                </div>
                <div className="cad-donw">
                    <div className="txt">
                        <h1>Nome do Documento</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip
                        </h2>
                    </div>
                    <button><i className="bi bi-cloud-download" />
                    </button>
                </div>
            </div>
        </div>

    );
}