import org.junit.Before;
import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.*;

/**
 * Created by pezhang on 18/07/2017.
 */
public class DemoTest2 {
    @Test
    public void addTest() throws Exception {
        assertThat(2+3,is(5));
    }
}
