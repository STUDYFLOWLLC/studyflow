import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateManyFK_TermInputEnvelope } from "../inputs/CourseOnTermCreateManyFK_TermInputEnvelope";
import { CourseOnTermCreateOrConnectWithoutFK_TermInput } from "../inputs/CourseOnTermCreateOrConnectWithoutFK_TermInput";
import { CourseOnTermCreateWithoutFK_TermInput } from "../inputs/CourseOnTermCreateWithoutFK_TermInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateNestedManyWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermCreateNestedManyWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => [CourseOnTermCreateWithoutFK_TermInput], {
    nullable: true
  })
  create?: CourseOnTermCreateWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermCreateOrConnectWithoutFK_TermInput], {
    nullable: true
  })
  connectOrCreate?: CourseOnTermCreateOrConnectWithoutFK_TermInput[] | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermCreateManyFK_TermInputEnvelope, {
    nullable: true
  })
  createMany?: CourseOnTermCreateManyFK_TermInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseOnTermWhereUniqueInput[] | undefined;
}
