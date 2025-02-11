import { ChainId } from '@jediswap/sdk'
import ZAP_IN_ABI from './abi.json'

//Change ABI
//Change Addressses

const ZAP_IN_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x29a303b928b9391ce797ec27d011d3937054bee783ca7831df792bae00c925c',
  [ChainId.ROPSTEN]: '0x73e3ccd627283aed4fa3940aa2bdb4d2c702e8e44c99b6851c019222558310f',
  [ChainId.KOVAN]: '0x73e3ccd627283aed4fa3940aa2bdb4d2c702e8e44c99b6851c019222558310f',
  [ChainId.RINKEBY]: '0x73e3ccd627283aed4fa3940aa2bdb4d2c702e8e44c99b6851c019222558310f',
  [ChainId.GÖRLI]: '0x73e3ccd627283aed4fa3940aa2bdb4d2c702e8e44c99b6851c019222558310f'
}

export { ZAP_IN_ABI, ZAP_IN_ADDRESS }
