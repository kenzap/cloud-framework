const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls, InnerBlocks } = wp.editor;
const { RangeControl, ToggleControl, PanelBody } = wp.components;
import { getStyles } from './block';
import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    /*
    * Change any property of item
    * @param {string} property - editable field
    * @param {string} value - for field
    * @param {number} index - of items array
    * @param {boolean} withMutation - in some cases we should avoid mutation for force rerender component
    */
    onChangePropertyItem = ( property, value, index, withMutation = false ) => {
        const items = withMutation ? [ ...this.props.attributes.items ] : this.props.attributes.items;
        items[ index ][ property ] = value+"";
        this.props.setAttributes( { items: items } );
        this.props.setAttributes( { randomValue: new Date().getTime()+"" } );
    };

    /**
     * Change any property of item
     * @param {string} el - key of items attributes array
     * @param {string} value -  value of editable field
     */
    updateItems = ( el, value ) => {

        const items = [ ...this.props.attributes.items ];
        let itemsT = items; 
        let itemsD = JSON.parse( defaultSocIcons );

        //add elements to item array
        if(value > items.length){

            var i = items.length;
            while(value>i){

                itemsT = [ ...itemsT, {
                    ...itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))],
                    key: 'new ' + new Date().getTime(),
                } ];

                i++;
            }
            this.props.setAttributes( { items: itemsT } );
        }

        //remove elements from item array
        if(value < items.length){
    
            if ( items.length === 1 ) {
                this.props.setAttributes( { items: itemsD[Math.floor(Math.random() * Math.floor(itemsD.length))] } );
            } else {
                var titems = items.slice( 0, value );
                this.props.setAttributes( { items: titems } );
            }
        }

        this.props.setAttributes( { "elements": value } );
    };

    render() {
        const {
            className,
            attributes,
            setAttributes,
            isSelected,
        } = this.props;

        const { vars, kenzapContanerStyles } = getStyles( attributes );
 
        const cStyles = { ...vars, 'max-width':(attributes.width100 ? "none":`${ attributes.containerMaxWidth }px`), '--maxWidth':`${ attributes.containerMaxWidth }px` }
        if(attributes.align!='full' && attributes.align!='wide'){
            cStyles['margin'] = 'auto';
        }else{
            cStyles['max-width'] = 'none';
        }

        return (
            <div>
                <InspectorControls>
                    <PanelBody
                        title={ __( 'General', 'kenzap-plugin' ) }
                        initialOpen={ false }
                        >

                        {/* NO REMOvE
                            <ToggleControl
                            label = { __( 'Custom icon color', 'kenzap-plugin' ) } 
                            checked={ attributes.customIconColor }
                            onChange={ ( customIconColor ) => {  setAttributes( { customIconColor: customIconColor } );  } }
                            help={ __( 'Apply custom color to icons. Works with SVG only.', 'kenzap-plugin' ) }
                        /> */}

                        <RangeControl
                            label={ __( 'Spacer size', 'kenzap-cta' ) }
                            value={ attributes.divSize }
                            onChange={ ( divSize ) => setAttributes( { divSize } ) }
                            min={ (attributes.responsive)?30:1 }
                            max={ 200 }
                        />

                        <ToggleControl
                            label = { __( 'Responsive', 'kenzap-plugin' ) } 
                            checked={ attributes.responsive }
                            onChange={ ( responsive ) => {  setAttributes( { responsive: responsive } );  } }
                            help={ __( 'Reduce spacer size proportionally screen width.', 'kenzap-plugin' ) }
                        />

                        {/* <RangeControl
                            label={ __( 'Icon size', 'kenzap-cta' ) }
                            value={ attributes.iconlSize }
                            onChange={ ( iconlSize ) => setAttributes( { iconlSize } ) }
                            min={ 1 }
                            max={ 50 }
                        /> */}


                    </PanelBody>

                    {/* <PanelColorSettings
                        title={ __( 'Colors', 'kenzap-plugin' ) }
                        initialOpen={ false }
                        colorSettings={ [
                            {
                                value: attributes.textColor2,
                                onChange: ( value ) => {
                                    return setAttributes( { textColor2: value } );
                                },
                                label: __( 'Highlight', 'kenzap-plugin' ),
                            },
                        ] }
                    /> */}

                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withNested
                        withBackground
                    />
                    </InspectorControls>
          
                <div className={ className ? className : '' } style={ {...cStyles, '--height':`${ attributes.divSize }`} }>
                    <ContainerEdit
                        className={ `kp-div-1 block-${ attributes.blockUniqId } ${ isSelected ? 'selected' : '' } ${ (attributes.responsive)?"autoPadding":"" }` }
                        attributes={ attributes }
                        withBackground
                        >
 
                        <div className="kenzap-container" style={ kenzapContanerStyles }>
                            { attributes.nestedBlocks == 'top' && <InnerBlocks /> }

                            <div class="kp-content" style={{ marginTop:'2px', marginBottom:'2px', "height":`${ (attributes.responsive)?"1":attributes.divSize }px` }} >
                                &nbsp;
                            </div>

                            { attributes.nestedBlocks == 'bottom' && <InnerBlocks /> }
                        </div>
                    </ContainerEdit>
                </div>
            </div>
        );
    }
}
