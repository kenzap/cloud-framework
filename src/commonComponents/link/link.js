const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { TextControl, ToggleControl, Popover  } = wp.components;

export const linkProps = {
    btnText: {
        type: 'string',
        default: 'View More',
    },
    linkNew: {
        type: 'boolean',
        default: false,
    },
    btnLink: {
        type: 'string',
        default: '#',
    },
    btnText2: {
        type: 'string',
        default: 'View More',
    },
    linkNew2: {
        type: 'boolean',
        default: false,
    },
    btnLink2: {
        type: 'string',
        default: '#',
    }
};

export const close = ( e ) => {

    setTimeout(function(){ 
        e.setState(current => ({
            popupVisibleIndex: -1
        }));
    }, 100);
};

/**
 * Generate inline typography styles for Rich Text editor
 * @param {Object} attributes - of the block
 * @returns {Node} generated styles
 */
export const linkPicker = ( e, index ) => {

    return(<Fragment>
        { e.state.popupVisibleIndex === 0 && (
        <Popover
            className="kp-popover" >
            <i
                onClick={ () => { close( e ) } }
                style={ {
                    lineHeight: 1,
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                } }
                className="dashicons dashicons-no"
            />
            <TextControl
                label={ __( 'Link' ) }
                placeholder={ __( 'http://www.example.com' ) }
                value={ e.props.attributes.btnLink }
                className="link-text"
                onChange={ ( btnLink ) => e.props.setAttributes( { btnLink } ) }
            />

            <ToggleControl
                label = { e.props.attributes.linkNew ? __( 'Open link in new window.' ) : __( 'Open link in current window' ) } 
                checked={ e.props.attributes.linkNew }
                onChange={ ( state ) => { e.props.setAttributes( { linkNew: state } ); } }
            />

            <TextControl
                label={ __( 'Title' ) }
                value={ e.props.attributes.btnText }
                className="link-text"
                onChange={ ( btnText ) => e.props.setAttributes( { btnText } ) }
            />

            <button className="link-close button button-large" onClick={ () => { close( e ); } } >
                { __( 'Save & Close' ) }
            </button>
        </Popover>
        ) }

        { e.state.popupVisibleIndex === 1 && (
        <Popover
            className="kp-popover" >
            <i
                onClick={ () => { close( e ) } }
                style={ {
                    lineHeight: 1,
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                } }
                className="dashicons dashicons-no"
            />
            <TextControl
                label={ __( 'Link' ) }
                placeholder={ __( 'http://www.example.com' ) }
                value={ e.props.attributes.btnLink2 }
                className="link-text"
                onChange={ ( btnLink2 ) => e.props.setAttributes( { btnLink2 } ) }
            />

            <ToggleControl
                label = { e.props.attributes.linkNew2 ? __( 'Open link in new window.' ) : __( 'Open link in current window' ) } 
                checked={ e.props.attributes.linkNew2 }
                onChange={ ( state ) => { e.props.setAttributes( { linkNew2: state } ); } }
            />

            <TextControl
                label={ __( 'Title' ) }
                value={ e.props.attributes.btnText2 }
                className="link-text"
                onChange={ ( btnText2 ) => e.props.setAttributes( { btnText2 } ) }
            />

            <button className="link-close button button-large" onClick={ () => { close( e ); } } >
                { __( 'Save & Close' ) }
            </button>
        </Popover>
        ) }

    </Fragment>);
};

