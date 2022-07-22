import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput";
import { CourseOnTermAutomationCreateWithoutAutomationLogInput } from "../inputs/CourseOnTermAutomationCreateWithoutAutomationLogInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateNestedOneWithoutAutomationLogInput {
  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateWithoutAutomationLogInput, {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutAutomationLogInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput, {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutAutomationLogInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseOnTermAutomationWhereUniqueInput | undefined;
}
