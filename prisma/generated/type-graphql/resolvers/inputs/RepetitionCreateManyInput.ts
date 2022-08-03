import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RepetitionType } from "../../enums/RepetitionType";

@TypeGraphQL.InputType("RepetitionCreateManyInput", {
  isAbstract: true
})
export class RepetitionCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RepetitionID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => RepetitionType, {
    nullable: true
  })
  RepetitionType?: "FOURTEN" | "FOURTHIRTY" | "SIXTHIRTY" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlashcardStackID?: string | undefined;
}
