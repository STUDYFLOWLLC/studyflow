import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("SchoolCreateManyInput", {
  isAbstract: true
})
export class SchoolCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SchoolID?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  HasClassSupport!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SearchIndex?: string | undefined;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  TermType?: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | undefined;
}
