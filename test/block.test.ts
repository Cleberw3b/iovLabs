import 'jest'
import { block0 } from './mocks/blocks'


interface Block {
    id: number
    next: Block | null | undefined
}

const hasCycles = ( firstBlock: Block ): boolean => {


    // Return false since it has no reference for the next
    if ( firstBlock == null || firstBlock.next == null )
        return false

    let slow: Block | null | undefined = firstBlock
    let fast: Block | null | undefined = firstBlock

    // Search for loop using slow and fast
    while ( slow && fast && fast.next ) {

        slow = slow.next
        fast = fast.next.next

        if ( slow == fast )
            return true
    }

    return false
}


describe( 'Block test', () => {

    it( 'Should return True for hasCycles', async ( done ) => {

        let tip: Block = { id: 4, next: null }
        let thirdBlock: Block = { id: 3, next: tip }
        let secondBlock: Block = { id: 2, next: thirdBlock }
        let firstBlock: Block = { id: 1, next: secondBlock }

        thirdBlock.next = secondBlock

        const expected = hasCycles( firstBlock )

        expect( expected ).toBeTruthy()
        done()
    } )

    it( 'Should return False for hasCycles', async ( done ) => {

        const expected = hasCycles( block0 )

        expect( expected ).toBeFalsy()
        done()
    } )
} )
