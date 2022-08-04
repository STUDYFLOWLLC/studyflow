import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CourseOnTermAutomationUpdateManyMutationInput } from "../../../inputs/CourseOnTermAutomationUpdateManyMutationInput";
import { CourseOnTermAutomationWhereInput } from "../../../inputs/CourseOnTermAutomationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCourseOnTermAutomationArgs {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationUpdateManyMutationInput, {
    nullable: false
  })
  data!: CourseOnTermAutomationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereInput, {
    nullable: true
  })
  where?: CourseOnTermAutomationWhereInput | undefined;
}
