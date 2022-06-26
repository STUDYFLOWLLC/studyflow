import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermCreateWithoutFK_CourseOnTermInput } from "../inputs/TermCreateWithoutFK_CourseOnTermInput";
import { TermUpdateWithoutFK_CourseOnTermInput } from "../inputs/TermUpdateWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("TermUpsertWithoutFK_CourseOnTermInput", {
  isAbstract: true
})
export class TermUpsertWithoutFK_CourseOnTermInput {
  @TypeGraphQL.Field(_type => TermUpdateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  update!: TermUpdateWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => TermCreateWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  create!: TermCreateWithoutFK_CourseOnTermInput;
}
