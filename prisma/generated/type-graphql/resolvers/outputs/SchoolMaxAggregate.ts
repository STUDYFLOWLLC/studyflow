import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.ObjectType("SchoolMaxAggregate", {
  isAbstract: true
})
export class SchoolMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  SchoolID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasClassSupport!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SearchIndex!: string | null;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: true
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER" | null;
}
