import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput";
import { CourseOnTermCreateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermCreateWithoutCourseOnTermAutomationInput";
import { CourseOnTermUpdateWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpdateWithoutCourseOnTermAutomationInput";
import { CourseOnTermUpsertWithoutCourseOnTermAutomationInput } from "../inputs/CourseOnTermUpsertWithoutCourseOnTermAutomationInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput", {
  isAbstract: true
})
export class CourseOnTermUpdateOneWithoutCourseOnTermAutomationInput {
  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutCourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutCourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpsertWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  upsert?: CourseOnTermUpsertWithoutCourseOnTermAutomationInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutCourseOnTermAutomationInput, {
    nullable: true
  })
  update?: CourseOnTermUpdateWithoutCourseOnTermAutomationInput | undefined;
}
