import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope } from "../inputs/CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope";
import { CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput";
import { CourseOnTermAutomationWhereUniqueInput } from "../inputs/CourseOnTermAutomationWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  create?: CourseOnTermAutomationCreateWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermAutomationCreateOrConnectWithoutFK_CourseOnTermInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermAutomationCreateManyFK_CourseOnTermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermAutomationWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermAutomationWhereUniqueInput[] | undefined;
}
