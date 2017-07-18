import org.hamcrest.core.Is;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.*;
/**
 * Created by pezhang on 18/07/2017.
 */
public class DemoTest {
    @Test
    public void demoTest() throws Exception {
        assertThat(1+1, is(2));
    }
}
