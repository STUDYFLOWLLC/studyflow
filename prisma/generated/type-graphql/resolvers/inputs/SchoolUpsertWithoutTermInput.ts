import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateWithoutTermInput } from "../inputs/SchoolCreateWithoutTermInput";
import { SchoolUpdateWithoutTermInput } from "../inputs/SchoolUpdateWithoutTermInput";

@TypeGraphQL.InputType("SchoolUpsertWithoutTermInput", {
  isAbstract: true
})
export class SchoolUpsertWithoutTermInput {
  @TypeGraphQL.Field(_type => SchoolUpdateWithoutTermInput, {
    nullable: false
  })
  update!: SchoolUpdateWithoutTermInput;

  @TypeGraphQL.Field(_type => SchoolCreateWithoutTermInput, {
    nullable: false
  })
  create!: SchoolCreateWithoutTermInput;
}
