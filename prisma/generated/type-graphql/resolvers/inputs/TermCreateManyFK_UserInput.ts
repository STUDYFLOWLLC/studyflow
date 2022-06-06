import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TermType } from "../../enums/TermType";

@TypeGraphQL.InputType("TermCreateManyFK_UserInput", {
  isAbstract: true
})
export class TermCreateManyFK_UserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  TermID?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TermType, {
    nullable: false
  })
  TermType!: "QUARTER" | "TRIMESTER" | "SEMESTER" | "SUMMER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TermName?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  TermStartDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  TermEndDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID?: number | undefined;
}
