import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateOrConnectWithoutFK_CourseOnTermInput } from "../inputs/TermCreateOrConnectWithoutFK_CourseOnTermInput";
import { TermCreateWithoutFK_CourseOnTermInput } from "../inputs/TermCreateWithoutFK_CourseOnTermInput";
import { TermWhereUniqueInput } from "../inputs/TermWhereUniqueInput";

@TypeGraphQL.InputType("TermCreateNestedOneWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TermCreateNestedOneWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TermCreateWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  create?: TermCreateWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermCreateOrConnectWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  connectOrCreate?: TermCreateOrConnectWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermWhereUniqueInput, {
    nullable: true
  })
  connect?: TermWhereUniqueInput | undefined;
}
