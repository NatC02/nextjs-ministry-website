import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types'

import "../libs/utils/navLinks";

export default function NavBar() {

  const router = useRouter()

return (

  // use a switch-l to contain a cluster-l for navLinks. 
  // There is a h1 heading to the left of the cluster-l contained in a box-l that auto expands to fill the available space within the cluster-l
  // Map names to link box-l and if there is a submenu map the names to the href values in the array object.
  // Each submenu uses an importer-l element to display the submenu name and href
  // IMPORTANT use navlink objects properties with map 

  <>
    <nav>
      <cluster-l class="clicky-menu no-js">
        
            {navLinks.map((link) => {
              return (
                // Instead of a stack-l, use a cluster-l (for this bottom element) to have a sidebar where the elements appear (works because of the horizontal-tb css writing mode ---> top to bottom flow). Enable it to see it.
                <stack-l>
                  <stack-l role="listitem">
                  
                    <central-l>
                      <stack-l>
                        <a
                        className=
                        // Had an error on .map(), solved it by: https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
                        // if router.pathname is link.href OR if link.submenu.map() is an exact match equal to sublink.href make value equal to active
                        {`${
                          (router.pathname === link.href || (link.submenu?.map((submenu) => {
                            // check for exact match for sublink.href and router.pathname, then return active if true
                            return submenu.href === router.pathname
                          }).includes(true))) ? "active" : ""
                        } button`}
                        role="listitem"
                        href={link.href}> 
                          {link.name}
                        </a>
                      </stack-l>
                    </central-l>



                    <cluster-l>
                      <center-l>
                        {link.submenu ? (
                            <div className='imposterNav'>
                            {/* <imposter-l> */}
                              {/* stack is to display top to bottom flow */}
                              <stack-l>
                                {link.submenu.map((sublink) => {
                                  return (
                                    // <center-l>
                                    <stack-l>
                                      <stack-l>
                                        <a
                                        className=
                                        {`${
                                          (router.pathname === link.href || (link.submenu?.map((submenu) => {
                                            // check for exact match for sublink.href and router.pathname, then return active if true
                                            return submenu.href === router.pathname
                                          }).includes(true))) ? "active" : ""
                                        } button`}
                                        role="listitem"
                                        href={sublink.href}>
                                          {sublink.name}
                                        </a>
                                      </stack-l>
                                    </stack-l>
                                    // </center-l>
                                  );
                                }
                                )}
                              </stack-l>
                            {/* </imposter-l> */}
                            </div>
                        ) : (
                          null
                        )}
                      </center-l>
                    </cluster-l>
                  </stack-l>
                </stack-l>
              );
            }
            )}
      </cluster-l>    
    </nav>
  </>
)}

// Validating props
NavBar.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.object).isRequired
}