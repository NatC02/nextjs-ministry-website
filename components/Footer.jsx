import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types'

import Card from './CardButton';

import "../libs/utils/navLinks";

export default function Footer() {
    return (
      <>
        <footer>
          <box-l>
            <center-l>
              <cluster-f>

                <stack-l>
                  <h4 
                  className='textAlignFooter'
                  href="/">Ministry NJ Federal <br/> Church of God John 17:10 INC</h4>

                  <p
                  className='textAlignFooter'
                  >Connect with us!</p>

                  <section className='clusterFooter'>
                    <div className='boxFooter'>
                      <img src="facebook.svg" alt="Facebook" />
                      <img src="instagram.svg" alt="Instagram" />
                      <img src="twitter.svg" alt="Twitter" />
                      <img src="youtube.svg" alt="Youtube" />
                    </div>
                  </section>
                </stack-l>


                <box-l>
                  <cluster-f>
                  {navLinks.map((link) => {
                    return (          
                      <stack-l role="list">
                        {link.submenu ? (
                        <a
                        className='textAlignFooter'
                        role="listitem"
                        href={link.href}> 
                          {link.name}
                        </a>
                        ) : (
                          null
                        )}

                          {link.submenu ? (
                            <stack-l>
                              {link.submenu.map((sublink) => {
                                return (
                                  <stack-l>
                                      <a
                                      className='textAlignFooter'
                                      role="listitem"
                                      href={sublink.href}>
                                        {sublink.name}
                                      </a>
                                  </stack-l>
                                );
                              }
                              )}
                            </stack-l>
                          ) : (
                            null
                          )}
                      </stack-l>
                    );
                  }
                  )}
                  </cluster-f>
                </box-l>
              </cluster-f>
            </center-l>
     
            <stack-l>
              <address className='textAlignFooter'>
                <p href="/contact">Contact Us</p>
                <p>Call: 1+ (551)-234-8418</p>
                <p>Email: PastorCeballos7@gmail.com</p>
                <p>Mailing Address: P.O Box 371 <br/> Union City NJ 07087 Ministerio NJ Federal Iglesia de Dios Juan 17:10 INC</p>
              </address>
            </stack-l>
          </box-l>

          <div className='textAlignFooter'>
            <box-l>
              <p>
                Ministry NJ Federal Church of God John 17:10 INC
              </p>
            </box-l>
          </div>
        </footer>
      </>
    );
  }

// Validating props
Footer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}