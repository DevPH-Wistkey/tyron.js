/*
    TyronZIL-js: Decentralized identity client for the Zilliqa blockchain platform
    Copyright (C) 2020 Julio Cesar Cabrapan Duarte

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
*/

import { NetworkNamespace } from '../decentralized-identity/tyronZIL-schemes/did-scheme';
import * as API from '@zilliqa-js/zilliqa';
import * as Util from '@zilliqa-js/util';

export default class ZilliqaInit {
    public readonly endpoint: ZilliqaEndpoint;
    public readonly chainID: ZilliqaChainID;
    public readonly API: API.Zilliqa;
    public readonly zil_version: number;

    constructor(
        network: NetworkNamespace
    ) {
        let NETWORK_ENDPOINT;
        let CHAIN_ID;
        switch (network) {
            case NetworkNamespace.Mainnet:
                NETWORK_ENDPOINT = ZilliqaEndpoint.Mainnet;
                CHAIN_ID = ZilliqaChainID.Mainnet;                
                break;
            case NetworkNamespace.Testnet:
                NETWORK_ENDPOINT = ZilliqaEndpoint.Testnet;
                CHAIN_ID = ZilliqaChainID.Testnet;
                break;
        }
        this.endpoint = NETWORK_ENDPOINT;
        this.chainID = CHAIN_ID;
        this.API = new API.Zilliqa(this.endpoint);
        this.zil_version = Util.bytes.pack(this.chainID, 1);
    }
}

enum ZilliqaEndpoint {
    Mainnet = 'https://api.zilliqa.com/',
    Testnet = 'https://dev-api.zilliqa.com/',
}

enum ZilliqaChainID {
    Mainnet = 1,
    Testnet = 333,
}
